"use client"

import React from "react";
import AddTodo from "@/components/AddTodo";
import { ChartPie, Check, Hourglass, List, SquareCheck } from "lucide-react";

type Todo = {
    id: number;
    todo: string;
    done: boolean;
};

type HeaderProps = {
    todos: Todo[];
    onAdd: (text: string) => void;
};

const Header = ({ todos, onAdd }: HeaderProps) => {
    return (
        <section>
            <div className="flex">
                <div className="px-4 sm:px-20 w-full mb-8">
                    <div className="text-black flex gap-2">
                        <div className="flex items-center justify-center bg-secondary p-6 border-2 border-black">
                            <SquareCheck size={100} strokeWidth={2} />
                        </div>
                        <h2 className="text-xl font-extrabold sm:text-7xl uppercase">
                            LET`S GET <br />THINGS DONE!
                        </h2>
                    </div>
                    <p className="mt-2 sm:mt-4 sm:block uppercase text-xs sm:text-xl">
                        Plan your day. Crush your goals.
                    </p>
                    <div className="mt-2 sm:mt-4 bg-white w-4/5">
                        <AddTodo onAdd={onAdd} />
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-20 grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 bg-white my-4">
                <div className="flex items-center gap-4 p-4 border-2 border-black shadow-sm shadow-black">
                    <div className="bg-primary p-4 border-2 border-black">
                        <List size={40} />
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl font-bold">{todos.length}</p>
                        <p className="text-lg font-normal">Total</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 border-2 border-black shadow-sm shadow-black">
                    <div className="bg-secondary p-4 border-2 border-black">
                        <Hourglass size={40} />
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl font-bold"> {todos.filter((todo) => todo.done === false).length}</p>
                        <p className="text-lg font-normal">Pending</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 border-2 border-black shadow-sm shadow-black">
                    <div className="bg-green-400 p-4 border-2 border-black">
                        <Check size={40} />
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl font-bold">{todos.filter((todo) => todo.done === true).length}</p>
                        <p className="text-lg font-normal">Done</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 border-2 border-black shadow-sm shadow-black">
                    <div className="bg-pink-400 p-4 border-2 border-black">
                        <ChartPie size={40} />
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl font-bold">
                            {todos && todos.length > 0
                                ? Math.round(
                                    (todos.filter((todo) => todo.done === true).length /
                                        todos.length) *
                                    100
                                )
                                : 0}
                            %
                        </p>
                        <p className="text-lg font-normal">Progress</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
