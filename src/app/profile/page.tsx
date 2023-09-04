"use client";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Profile() {
    const { data: session } = useSession();
    const [discordData, setDiscordData] = useState<{
        status: string;
        user: any;
    }>({
        status: "loading",
        user: {},
    });
    if (session?.user?.discord.id) {
        
    }

    useEffect(() => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const [accessToken, tokenType] = [
            fragment.get("access_token"),
            fragment.get("token_type"),
        ];
        const discord_name = document.getElementById("discord_name");
        if (!session?.user?.discord.id) {
            setDiscordData({
                status: "not_connected",
                user: {},
            });
            if (discord_name) discord_name.textContent = "Not connected";
        } else {
            fetch(`https://discord.com/api/users/@me`, {
                headers: {
                    Authorization: `${tokenType} ${accessToken}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setDiscordData({
                        status: "connected",
                        user: {
                            id: data.id,
                            username: data.username,
                            avatar: data.avatar,
                        },
                    });
                    if (discord_name)
                        discord_name.textContent = `${data.global_name} (${data.username})`;
                });
        }
    }, []);
    return (
        <main className={styles.main}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Profile</h1>
                <div className={styles.usernameContainer}>
                    <h1 className={styles.usernameTitle}>
                        {session?.user?.name}
                    </h1>
                </div>
                <div className={styles.avatarContainer}>
                    <Image
                        src="/avatar.png"
                        alt="logo"
                        width={412}
                        height={282}
                    />
                </div>
                <div className={styles.discordContainer}>
                    <h1 className={styles.discordTitle}>Discord</h1>
                    <h1 className={styles.discordId} id="discord_name">
                        Loading...
                    </h1>
                    {discordData.status === "not_connected" && (
                        <a href="https://discord.com/api/oauth2/authorize?client_id=1147919867446575196&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fprofile&response_type=token&scope=identify%20email">
                            Conectar
                        </a>
                    )}
                </div>
            </div>
        </main>
    );
}
