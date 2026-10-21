"use client"
import React, { useState } from "react";
import UpdateTodo from "@/components/UpdateTodo";
import DeleteTodo from "@/components/DeleteTodo";
import { Inbox } from "lucide-react";

type Todo = {
    id: number;
    todo: string;
    done: boolean;
};

type HeaderProps = {
    todos: Todo[];
    onUpdate: (id: number) => void;
    onDelete: (id: number) => void;
};

const Todos = ({ todos, onUpdate, onDelete }: HeaderProps) => {
    const [status, setStatus] = useState("all");

    const filteredTodos = (() => {
        switch (status) {
            case "all":
                return todos;
            case "pending":
                return todos.filter((todo) => todo.done === false);
            case "done":
                return todos.filter((todo) => todo.done === true);
            default:
                return [];
        }
    })();

    return (
        <section className="px-4 py-4 sm:px-20">
            <div className="gap-4 border-2 border-black p-4">
                <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
                    <h3 className="uppercase text-2xl font-semibold">your tasks</h3>
                    <div className="flex flex-row gap-1">
                        <button
                            onClick={() => setStatus("all")}
                            className={`px-3 sm:px-4 py-0 sm:py-1  border border-black flex items-center text-xl shadow-default  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${status == "all"
                                ? "bg-primary text-black pointer-events-none"
                                : "bg-white text-black hover:bg-primary hover:text-black"
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setStatus("pending")}
                            className={`px-3 sm:px-4 py-0 sm:py-1  border border-black flex items-center text-xl shadow-default  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${status == "pending"
                                ? "bg-primary text-black pointer-events-none"
                                : "bg-white text-black hover:bg-primary hover:text-black"
                                }`}
                        >
                            Pending
                        </button>
                        <button
                            onClick={() => setStatus("done")}
                            className={`px-3 sm:px-4 py-0 sm:py-1 border border-black flex items-center text-xl shadow-default  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${status == "done"
                                ? "bg-primary text-black pointer-events-none"
                                : "bg-white text-black hover:bg-primary hover:text-black"
                                }`}
                        >
                            Done
                        </button>
                    </div>
                </div>
                {filteredTodos.length > 0 ? (
                    filteredTodos
                        .slice()
                        .sort((a, b) => {
                            if (a.done === true && b.done !== true) return 1;
                            if (a.done !== true && b.done === true) return -1;
                            return 0;
                        })
                        .map((item) => (
                            <div
                                key={item.id}
                                className={`bg-white text-lg p-2 sm:p-3 border-2 border-black flex flex-row justify-between items-center mb-2 ${item.done === true ? "line-through opacity-80" : ""
                                    }`}
                            >
                                <span className="font-normal text-black">{item.todo}</span>
                                <div className="flex flex-row items-center gap-2 pe-2">
                                    <UpdateTodo todo={item} done={item.done} onUpdate={onUpdate} />
                                    <DeleteTodo todo={item} onDelete={onDelete} />
                                </div>
                            </div>
                        ))
                ) : (
                    <div className="bg-primary/10 text-lg p-8 border-dashed border-2 border-primary justify-center items-center mb-2 flex flex-col gap-2">
                        <Inbox size={40} />
                        <p className="font-semibold text-lg">No tasks found</p>
                        <p className="text-black/50 text-sm">Add your first task and start being productive!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Todos;
