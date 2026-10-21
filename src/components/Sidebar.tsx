"use client"

import { Calendar, House, List, SquareCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: "HOME", icon: <House size={28} strokeWidth={2} />, href: "/" },
        { name: "TODAY", icon: <Calendar size={28} strokeWidth={2} />, href: "/today" },
        { name: "MY TASKS", icon: <List size={28} strokeWidth={2} />, href: "/my-tasks" },
    ]

    return (
        <aside className="bg-stone-100 border-r-4 border-black w-80 flex flex-col">
            <div className="bg-secondary w-full p-6 flex items-center gap-2 border-b-2 border-black">
                <SquareCheck size={50} strokeWidth={2} />
                <h1 className="text-4xl font-semibold">YourTask</h1>
            </div>
            <div className="p-6 flex flex-1 flex-col gap-3">
                {menuItems.map((item, index) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`p-3 flex items-center text-lg ${isActive
                                && "bg-primary border border-black shadow-default active:translate-x-[2px] active:translate-y-[2px] active:shadow-none pointer-events-none"}`}
                        >
                            {item.icon} <span className="ml-2 text-lg font-semibold">{item.name}</span>
                        </Link>
                    )
                })}
                <div className="bg-amber-50 w-full p-3 flex items-center gap-2 border-2 border-black mt-auto">
                    <div className="rounded-full bg-secondary p-4 border-2 border-black">img</div>
                    <div>
                        <p className="text-xl font-semibold">Hi there</p>
                        <p className="text-base font-light">Stay productive</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
