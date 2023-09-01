import Image from "next/image";
import styles from "./main_navbar.module.css";

export default function MainNavbar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.container}>
                <li className={styles.element}>
                    <a href="/">Home</a>
                </li>
                <li className={styles.element}>
                    <a href="/info">Info</a>
                </li>
                <li className={styles.element}>
                    <a href="/regulamento">Regulamento</a>
                </li>
                <ul className={styles.center}>
                    <Image src="/logo.png" alt="logo" width={150} height={150} />
                </ul>
                <ul className={styles.right}>
                    <li className={styles.element}>
                        <a href="/staff">Administração</a>
                    </li>
                    <li className={styles.element}>
                        <a href="/login">Login</a>
                    </li>
                    <li className={styles.element}>
                        <a href="/register">Register</a>
                    </li>
                </ul>
            </ul>
        </nav>
    );
}
