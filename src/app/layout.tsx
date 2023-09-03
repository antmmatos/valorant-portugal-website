import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainNavbar from "@/components/main_navbar";
import { ToastContainer } from "react-toastify";
import Provider from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Valorant Portugal",
    description: "",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt">
            <body className={inter.className}>
                <Provider>
                    {<MainNavbar />}
                    {children}
                    <ToastContainer
                        position="bottom-right"
                        autoClose={2500}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable={false}
                        pauseOnHover={false}
                        theme="colored"
                    />
                </Provider>
            </body>
        </html>
    );
}
