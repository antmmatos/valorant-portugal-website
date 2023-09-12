import styles from "./page.module.css";
import Image from "next/image";

export default function ProfileAccountsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.connectText}>Conecta as tuas contas</h1>
                <div className={styles.discordContainer}>
                    <Image src="/bar.png" alt="bar" width={512} height={110} />
                </div>
                <div className={styles.riotContainer}>
                    <Image src="/bar.png" alt="bar" width={512} height={110} />
                </div>
        </div>

    );
}