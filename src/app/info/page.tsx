import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
    return <main className={styles.main}>

        <div className={styles.container}>
            <h1 className={styles.info}>Info</h1>
            <p className={styles.textInfo}>
                O Valorant Portugal Torneios é um novo projeto em Portugal!
                <br />
                <br />
                O Nosso Objetivo é trazer mais competitividade à comunidade Portuguesa.
                <br />
                <br />

                A nossa liga funciona com duas divisões, no final de cada campeonato temos qualificatórias onde os 2 finalistas irão jogar contra o 7º e 8º lugar da segunda liga, para dar assim oportunidade de novas equipas entrarem na liga.
                Os primeiros e segundo lugar da Segunda liga no fim de cada campeonato jogam os play offs contra os 7º e 8º lugar da primeira liga para decidir assim as equipas que permanecem e sobem ou descem entre as ligas.
                <br />
                <br />
                Os 4 primeiros lugares da primeira liga, jogam no fim do campeonato as finais para decidir assim o campeão de cada liga.
                <br />
            </p>
        </div>
        <div className={styles.imagesContainer}>
            <a href="https://www.twitch.tv/vlrportugaltorneios">
                <Image src="/logo_valtorneios_twitch_png.png" alt="logo" width={250} height={250} />
            </a>
            <a href="https://discord.gg/vlrpt">
                <Image src="/discord_logo.png" alt="logo" width={250} height={250} />
            </a>
            <a href="https://twitter.com/ValorantPTC">
                <Image src="/twitter_logo.png" alt="logo" width={250} height={250} />
            </a>
            <a href="https://www.tiktok.com/@valorant_portugal">
            <Image src="/tiktok_logo.png" alt="logo" width={250} height={250} />
            </a>
        </div>
    </main>;
}

