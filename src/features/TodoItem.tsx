import React from 'react';
import TodoItemClass  from "../stores/todo-item";

interface Props {
    todo: TodoItemClass;
}

export const TodoItem = ({todo}: Props) => {
    return (
        <div>
            <span>{todo.text}</span>
            <input type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.isDone}></input>
        </div>
    )
};
