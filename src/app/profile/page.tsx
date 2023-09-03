"use client";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Profile() {
    const { data: session } = useSession();
    let isDiscordConnected;
    if (session?.user?.isDiscordConnected === "True") {
        isDiscordConnected = <h1>Discord Conectado</h1>;
    } else {
        isDiscordConnected = <button className={styles.button} type="submit">
                        Conectar Discord
                    </button>;
    }

    return <main className={styles.main}>
        <div className={styles.usernameContainer}>
            <h1 className={styles.usernameTitle}>{session?.user?.name}</h1>
        </div>
        <div className={styles.avatarContainer}>
            <Image src="/avatar.png" alt="logo" width={412} height={282} />
        </div>
        
         <h1>{isDiscordConnected}</h1>
        
    </main>
}