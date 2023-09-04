export enum Role {
    user = "user",
    admin = "admin",
    superadmin = "superadmin",
}

declare module "next-auth" {
    interface DiscordData {
        id?: string;
        username?: string;
    }

    interface User {
        id: number;
        name: string;
        email: string;
        role: Role;
        discord: DiscordData;
    }

    interface Session extends DefaultSession {
        user?: User;
    }
}