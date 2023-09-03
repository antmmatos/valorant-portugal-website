"use client";
import Image from "next/image";
import styles from "./main_navbar.module.css";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function MainNavbar() {
    const { data: session, status } = useSession();
    useEffect(() => {
        const activePage = window.location.pathname.split("/")[1] || "home";
        const element = document.getElementById(activePage);
        element?.classList.add(styles.active);
    }, []);
    if (status === "authenticated") {
        const loginLabel = document.getElementById("login");
        if (loginLabel) {
            loginLabel.textContent = "Profile" || "Login";
            loginLabel.setAttribute("href", "/profile");
        }
    }
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
                        priority={true}
                        src="/logo.png"
                        alt="logo"
                        width={150}
                        height={150}
                    />
                </ul>
                <ul className={styles.right}>
                    <li className={styles.element}>
                        <a href="/torneios" id="torneios">
                            Tournaments
                        </a>
                    </li>
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
                </ul>
            </ul>
        </nav>
    );
}
