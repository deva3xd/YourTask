import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "../components/Sidebar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "YourTask",
    description: "A simple todo app wiith brutalism design",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex min-h-screen">
                <Sidebar />
                <div className="flex flex-1 flex-col">
                    <Navbar />
                    <main>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
