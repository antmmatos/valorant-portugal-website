import styles from "./page.module.css";

export default function Register() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Register</h1>
                <form className={styles.form}>
                    <label className={styles.label} htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className={styles.input}
                        type="firstName"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        required
                    />
                    <label className={styles.label} htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className={styles.input}
                        type="lastName"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        required
                    />
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
                    <label className={styles.label} htmlFor="birthday">
                        Birthday
                    </label>
                    <input
                        className={styles.input}
                        type="date"
                        id="birthday"
                        name="birthday"
                        placeholder="Birthday"
                        required
                    />
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
                    <label className={styles.label} htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        className={styles.input}
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                    />
                    <button className={styles.button} type="submit">
                        Register
                    </button>
                </form>
            </div>
        </main>
    );
}
