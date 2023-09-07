"use client";
import Image from "next/image";
import styles from "./main_navbar.module.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function MainNavbar() {
    const { status } = useSession();
    const pathname = usePathname();
    useEffect(() => {
        const activePage = pathname.split("/")[1] || "home";
        const element = document.getElementById(activePage);
        element?.classList.add(styles.active);
    }, [status]);
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
                    {(status === "unauthenticated" && (
                        <>
                            <li className={styles.element}>
                                <a href="/login" id="login">
                                    Login
                                </a>
                            </li>
                            <li className={styles.element}>
                                <a
                                    className={styles.registerBtn}
                                    href="/register"
                                    id="register"
                                >
                                    Register
                                </a>
                            </li>
                        </>
                    )) ||
                        (status === "authenticated" && (
                            <>
                                <li className={styles.element}>
                                    <a href="/accounts" id="accounts">
                                        Team
                                    </a>
                                </li>
                                <li className={styles.element}>
                                    <a href="/accounts" id="accounts">
                                        Accounts
                                    </a>
                                </li>
                                <li className={styles.element}>
                                    <a
                                        className={styles.registerBtn}
                                        href="/profile"
                                        id="profile"
                                    >
                                        Profile
                                    </a>
                                </li>
                            </>
                        ))}
                </ul>
            </ul>
        </nav>
    );
}
