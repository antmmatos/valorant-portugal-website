"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function ProfileAccountsPage() {
    const router = useRouter();
    const { data: session } = useSession();
    const [discord, setDiscord] = useState<string>();
    const [riot, setRiot] = useState<string>();
    useEffect(() => {
        setDiscord(session?.user?.discord?.username);
        setRiot(session?.user?.riot?.username);
    }, [session]);

    return (
        <div className={styles.container}>
            <h1 className={styles.connectText}>Conecta as tuas contas</h1>
            <div className={styles.accountContainer}>
                <Image src="/bar.png" alt="bar" width={480} height={110} />
                <div
                    className={styles.discordContainer}
                    onClick={() =>
                        router.push(
                            "https://discord.com/api/oauth2/authorize?client_id=1147919867446575196&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fprofile%2Faccounts%2Fdiscord&response_type=token&scope=identify%20email"
                        )
                    }
                >
                    <Image
                        src="/discord_logo2.png"
                        alt="bar"
                        width={50}
                        height={50}
                    />
                    <h1 className={styles.text}>
                        {discord ? discord : "Conectar Discord"}
                    </h1>
                </div>
            </div>
            <h1 className={styles.andText}>E</h1>
            <div className={styles.accountContainer}>
                <Image src="/bar.png" alt="bar" width={480} height={110} />
                <div
                    className={styles.riotContainer}
                    onClick={() => router.push("")}
                >
                    <Image
                        src="/riot_logo.png"
                        alt="bar"
                        width={50}
                        height={50}
                    />
                    <h1 className={styles.text}>
                        {riot ? riot : "Conectar Riot"}
                    </h1>
                </div>
            </div>
        </div>
    );
}
