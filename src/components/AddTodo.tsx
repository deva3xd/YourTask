"use client"

import { useState, FormEvent } from "react";

type HeaderProps = {
    onAdd: (text: string) => void;
};

const AddTodo = ({ onAdd }: HeaderProps) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!todo.trim()) return;
        onAdd(todo);
        setTodo("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task"
                className="w-full rounded-sm bg-white p-2 sm:p-4 transition focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none shadow-default border-2 border-black"
            />
            <button
                type="submit"
                className="group flex items-center justify-center gap-2 rounded-sm bg-primary text-black transition focus:outline-hidden mt-0 w-32 hover:bg-opacity-95 shadow-default active:translate-x-[2px] active:translate-y-[2px] active:shadow-none border border-black"
            >
                <span className="text-xl font-medium">Add</span>
            </button>
        </form>
    )
}

export default AddTodo
