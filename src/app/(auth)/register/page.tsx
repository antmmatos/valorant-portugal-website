"use client";
import { toast } from "react-toastify";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";

export default function Register() {
    const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            event.currentTarget.password.value !==
            event.currentTarget.confirmPassword.value
        ) {
            return toast.error("As passwords inseridas não correspondem");
        }
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: event.currentTarget.firstName.value,
                lastName: event.currentTarget.lastName.value,
                username: event.currentTarget.username.value,
                birthday: event.currentTarget.birthday.value,
                email: event.currentTarget.email.value,
                password: event.currentTarget.password.value,
            }),
        });
        if (res.status === 200) {
            toast.success("Conta criada com sucesso");
            const res = await signIn("credentials", {
                username: event.currentTarget.username.value,
                password: event.currentTarget.password.value,
                redirect: false,
            });
            if (res?.error) {
                return toast.error("Ocorreu um erro ao fazer login");
            }
            return toast.warning("Verifique o email para confirmar a conta");
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.border}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Register</h1>
                    <form className={styles.form} onSubmit={handleClick}>
                        <div className={styles.rowInputs}>
                            <div className={styles.labelInput}>
                                <label
                                    className={styles.label}
                                    htmlFor="firstName"
                                >
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
                            </div>
                            <div className={styles.labelInput}>
                                <label
                                    className={styles.label}
                                    htmlFor="lastName"
                                >
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
                            </div>
                        </div>
                        <div className={styles.rowInputs}>
                            <div className={styles.labelInput}>
                                <label
                                    className={styles.label}
                                    htmlFor="username"
                                >
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
                            </div>
                            <div className={styles.labelInput}>
                                <label
                                    className={styles.label}
                                    htmlFor="birthday"
                                >
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
                            </div>
                        </div>
                        <div className={styles.rowInputs}>
                            <div className={styles.labelInput}>
                                <label
                                    className={styles.label}
                                    htmlFor="country"
                                >
                                    Country
                                </label>
                                <input
                                    className={styles.input}
                                    type="country"
                                    id="country"
                                    name="country"
                                    placeholder="Country"
                                    required
                                />
                            </div>
                            <div className={styles.labelInput}>
                                <label
                                    className={styles.label}
                                    htmlFor="gender"
                                >
                                    Gender
                                </label>
                                <select className={styles.select}>
                                    <option value="" disabled selected>
                                        Selecione
                                    </option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.rowInputs}>
                            <div className={styles.labelInput}>
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
                            </div>
                            <div className={styles.labelInput}>
                                <label
                                    className={styles.label}
                                    htmlFor="confirmEmail"
                                >
                                    Confirm Email
                                </label>
                                <input
                                    className={styles.input}
                                    type="confirmEmail"
                                    id="confirmEmail"
                                    name="confirmEmail"
                                    placeholder="Confirm Email"
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.rowInputs}>
                            <div className={styles.labelInput}>
                                <label
                                    className={styles.label}
                                    htmlFor="password"
                                >
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
                            </div>
                            <div className={styles.labelInput}>
                                <label
                                    className={styles.label}
                                    htmlFor="confirmPassword"
                                >
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
                            </div>
                        </div>
                        <button className={styles.button} type="submit">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
