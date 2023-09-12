import styles from "./page.module.css";
import Image from "next/image";

export default function ProfileAccountsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.connectText}>Conecta as tuas contas</h1>
                <div className={styles.discordContainer}>
                    <Image src="/discord_logo.png" alt="bar" width={100} height={100} />
                    <h1 className={styles.text}>Conectar discord</h1>
                </div>
                <div className={styles.riotContainer}>
                    <Image src="/riot_logo.png" alt="bar" width={50} height={50} />
                    <h1 className={styles.text}>Conectar Riot</h1>
                </div>
        </div>

    );
}