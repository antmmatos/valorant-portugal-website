"use client";
import Image from "next/image";
import styles from "./main_navbar.module.css";

export default function MainNavbar() {
    const activePage = window.location.pathname.split("/")[1] || "home";
    
    const element = document.getElementById(activePage);
    element?.classList.add(styles.active);
    return (
        <nav className={styles.nav}>
            <ul className={styles.container}>
                <li className={styles.element}>
                    <a href="/" id="home">
                        Home
                    </a>
                </li>
                <li className={styles.element}>
                    <a href="/info" id="info">
                        Informations
                    </a>
                </li>
                <li className={styles.element}>
                    <a href="/regulamento" id="regulamento">
                        Rules
                    </a>
                </li>
                <ul className={styles.center}>
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={150}
                        height={150}
                    />
                </ul>
                <ul className={styles.right}>
                    <li className={styles.element}>
                        <a href="/staff" id="staff">
                            Staff
                        </a>
                    </li>
                    <li className={styles.element}>
                        <a href="/login" id="login">
                            Login
                        </a>
                    </li>
                    <li className={styles.element}>
                        <a href="/register" id="register">
                            Register
                        </a>
                    </li>
                </ul>
            </ul>
        </nav>
    );
}
