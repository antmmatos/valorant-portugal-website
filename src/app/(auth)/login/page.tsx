"use client";
import { signIn } from "next-auth/react";
import styles from "./page.module.css";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const handleSubmitLogin = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        const res = await signIn("credentials", {
            username: event.currentTarget.username.value,
            password: event.currentTarget.password.value,
            redirect: false,
            callbackUrl: "/profile",
        });
        if (res?.error) {
            return toast.error("Username e password não correspondem");
        }
        router.push("/profile");
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Login</h1>
                <form className={styles.form} onSubmit={handleSubmitLogin}>
                    <label className={styles.label} htmlFor="username">
                        Username
                    </label>
                    <input
                        className={styles.input}
                        type="username"
                        id="username"
                        name="username"
                        placeholder="Username"
                        required
                    />
                    <label className={styles.label} htmlFor="password">
                        Password
                    </label>
                    <input
                        className={styles.input}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <button className={styles.button} type="submit">
                        Login
                    </button>
                    <span>
                        Se não tens conta,{" "}
                        <a href="/register">
                            <u>regista-te</u>
                        </a>
                    </span>
                </form>
            </div>
        </main>
    );
}
