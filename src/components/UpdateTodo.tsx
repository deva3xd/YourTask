"use client"

import { Check, X } from 'lucide-react';
import React from 'react'

type Todo = {
    id: number;
    todo: string;
}

type HeaderProps = {
    todo: Todo;
    onUpdate: (id: number) => void;
    done: boolean;
}

const UpdateTodo = ({ todo, onUpdate, done }: HeaderProps) => {
    return (
        <button onClick={() => onUpdate(todo.id)} className={done === false ? "p-1 hover:bg-green-100" : "p-1 hover:bg-red-100"}>
            {done === false ? <Check className="hover:text-green-500" /> : <X className="hover:text-red-500" />}
        </button>
    )
}

export default UpdateTodo
