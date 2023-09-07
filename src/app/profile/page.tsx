import styles from "./page.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons/faUpload";

export default function Profile() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.avatarContainer}>
                    <div className={styles.uploadImage}>
                        <FontAwesomeIcon icon={faUpload} />
                    </div>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className={styles.informationContainer}>
                    <div className={styles.infoDetails}>
                        <h5>Name</h5>
                        <input placeholder="" />
                        <h5>Username</h5>
                        <input placeholder="" />
                        <h5>Email</h5>
                        <input placeholder="" />
                    </div>
                    <div className={styles.infoDetails}>
                        <h5>Phone</h5>
                        <input placeholder="" />
                        <h5>Birthday</h5>
                        <input placeholder="" />
                    </div>
                </div>
            </div>
        </main>
    );
}
