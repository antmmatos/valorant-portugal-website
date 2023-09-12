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

    interface RiotData {
        // TODO
    }

    interface User {
        id: number;
        username: string;
        mail: string;
        role: Role;
        discord: DiscordData;
        riot: RiotData;
    }

    interface Session extends DefaultSession {
        user?: User;
    }
}