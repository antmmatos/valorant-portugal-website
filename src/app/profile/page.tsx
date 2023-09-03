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

    useEffect(() => {
        const discord_name = document.getElementById("discord_name");
        if (!session?.user?.discordId) {
            setDiscordData({
                status: "not_connected",
                user: {},
            });
            if (discord_name) discord_name.textContent = "Not connected";
        } else {
            fetch(
                `https://discord.com/api/v10/users/${session?.user?.discordId}`
            )
                .then((res) => res.json())
                .then((data) => {
                    setDiscordData({
                        status: "connected",
                        user: {
                            id: data.id,
                            username: data.username,
                            global_name: data.global_name,
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
                </div>
            </div>
            <div>
                <h1 className={styles.title}>Tournaments</h1>
            </div>
        </main>
    );
}
