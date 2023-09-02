import styles from "./page.module.css";

export default function Login() {



    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Login</h1>
                <form className={styles.form}>
                    <label className={styles.label} htmlFor="email">
                        Email
                    </label>
                    <input
                        className={styles.input}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
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
                </form>
            </div>
        </main>
    );
}
