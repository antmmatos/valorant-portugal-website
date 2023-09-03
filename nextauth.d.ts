export enum Role {
    user = "user",
    admin = "admin",
    superadmin = "superadmin",
}

declare module "next-auth" {
    interface User {
        id: number;
        name: string;
        email: string;
        role: Role;
        discordId?: string;
    }

    interface Session extends DefaultSession {
        user?: User;
    }
}