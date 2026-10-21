"use client"

import { useState, useEffect } from "react";
import { Sun, Moon, Sunset } from "lucide-react";

export default function Navbar() {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const updateGreeting = () => {
            const hour = new Date().getHours();

            if (hour >= 5 && hour < 12) {
                setGreeting("Good morning");
            } else if (hour >= 12 && hour < 17) {
                setGreeting("Good afternoon");
            } else if (hour >= 17 && hour < 20) {
                setGreeting("Good evening");
            } else {
                setGreeting("Good night");
            }
        };

        updateGreeting();

        const interval = setInterval(updateGreeting, 60000);

        return () => clearInterval(interval);
    }, []);

    const hour = new Date().getHours();

    const GreetingIcon =
        hour >= 5 && hour < 12
            ? Sun
            : hour >= 12 && hour < 17
                ? Sun
                : hour >= 17 && hour < 20
                    ? Sunset
                    : Moon;

    return (
        <nav className="flex justify-end p-6">
            <div className="border-2 border-black py-3 px-6 font-semibold flex items-center gap-2">
                <GreetingIcon
                    fill={hour >= 5 && hour < 17 ? "yellow" : "black"}
                />
                {greeting}
            </div>
        </nav>
    );
}