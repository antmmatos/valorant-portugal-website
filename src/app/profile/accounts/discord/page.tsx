"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function discordVerified() {
    const [returnData, setReturnData] = useState<JSX.Element | JSX.Element[]>();
    const { data, update } = useSession();
    const router = useRouter();
    useEffect(() => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const [accessToken, tokenType] = [
            fragment.get("access_token"),
            fragment.get("token_type"),
        ];
        if (!accessToken || !tokenType) {
            return router.push("/profile");
        }
        fetch(`https://discord.com/api/users/@me`, {
            headers: {
                Authorization: `${tokenType} ${accessToken}`,
            },
        }).then(async (res) => {
            const data = await res.json();
            if (res.status === 200) {
                const res = await fetch("/api/accounts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        account: "discord",
                        id: data.id,
                        username: data.username,
                        avatar: data.avatar,
                    }),
                });
                const storeInfoRes = await res.json();
                if (res.status !== 200) {
                    toast.error(storeInfoRes.message);
                    return router.push("/");
                }
                await update({
                    user: {
                        ...data,
                        discord: {
                            id: data.id,
                            username: data.username,
                            avatar: data.avatar,
                        },
                    },
                });
                setReturnData(
                    <div className={styles.container}>
                        <Image
                            src={"/right.png"}
                            alt="Verified Image"
                            width={250}
                            height={250}
                        />
                        <h1>Discord verificado</h1>
                        <p>
                            Conta de Discord verificada com sucesso. Será
                            redirecionado em alguns segundos. Caso não seja
                            redirecionado, clique{" "}
                            <a href="/profile/accounts">aqui</a>.
                        </p>
                    </div>
                );
                setTimeout(() => {
                    return router.push("/profile");
                }, 2000);
            } else {
                return router.push("/profile");
            }
        });
    }, []);
    return returnData;
}
