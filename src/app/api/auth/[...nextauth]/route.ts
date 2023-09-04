import queryData from "@/app/lib/db";
import NextAuth from "next-auth";
import type { AuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import crypto from "crypto";

export const authOptions: AuthOptions = {
    useSecureCookies: process.env.NODE_ENV === "production",
    debug: process.env.NODE_ENV !== "production",
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: "/login",
        error: "/",
        newUser: "/register",
        signOut: "/",
    },
    callbacks: {
        async session({ session, token }: { session: Session; token: any }) {
            (session as any).user = token.user;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return { ...token, ...user };
        },
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (typeof credentials !== "undefined") {
                    const res = await queryData(
                        "SELECT ID, Username, Email, Role, DiscordId FROM users WHERE Username = ? AND Password = ?",
                        [
                            credentials.username,
                            crypto
                                .createHash("sha256")
                                .update(credentials.password)
                                .digest("hex")
                                .toString(),
                        ]
                    );
                    if (res.length > 0) {
                        const discordData = JSON.parse(res[0].DiscordData);
                        return {
                            id: res[0].ID,
                            name: res[0].Username,
                            email: res[0].Email,
                            role: res[0].Role,
                            discord: {
                                id: discordData.id,
                                username: discordData.username,
                            },
                        };
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
