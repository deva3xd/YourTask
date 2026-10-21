"use client"

import { Trash2 } from "lucide-react";

type Todo = {
    id: number;
    todo: string;
    done: boolean;
}

type HeaderProps = {
    todo: Todo;
    onDelete: (id: number) => void;
}

const DeleteTodo = ({ todo, onDelete }: HeaderProps) => {
    return (
        <button type="button" onClick={() => onDelete(todo.id)} className="p-1 hover:bg-red-100">
            <Trash2 className="hover:text-red-500" />
        </button>
    )
}

export default DeleteTodo