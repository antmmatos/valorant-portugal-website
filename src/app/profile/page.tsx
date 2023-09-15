"use client";
import styles from "./page.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons/faUpload";
import { useState } from "react";
import { signOut } from "next-auth/react"

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        birthday: "",
    });

    const toggleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const saveChanges = () => {
        toggleEdit();
    };

    return (
        <main className={styles.main}>
            <div className={styles.profile}>
                <div className={styles.profileHeader}>
                    <img
                        className={styles.profileImage}
                        src="profile-image.jpg"
                        alt="Profile"
                    />
                    <div className={styles.headerText}>
                        <h1 className={styles.name}>John Doe</h1>
                        <p className={styles.jobTitle}>Web Developer</p>
                    </div>
                </div>
                <div className={styles.profileContent}>
                    <div className={styles.aboutMe}>
                        <h2>About Me</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam eget nisi sit amet quam rhoncus
                            bibendum.
                        </p>
                    </div>
                    <div className={styles.contactInfo}>
                        <h2>Contact Information</h2>
                        <ul>
                            <li>Email: john@example.com</li>
                            <li>Phone: (123) 456-7890</li>
                        </ul>
                    </div>
                </div>
                <button className={styles.signOutButton} onClick={
                    () => {
                        signOut({ callbackUrl: '/'})
                    }
                }>Sign out</button>
            </div>
        </main>
    );
}
