import React from 'react';
import {useStore} from "../stores/helpers/use-store";
import {TodoItem} from "./TodoItem";
import {useObserver} from "mobx-react-lite";

export const TodoList = () => {
    const todoList = useStore();

    return useObserver(() => (
        <>
            {todoList.list.map(todo => <TodoItem key={`${todo.id}-${todo.text}`} todo={todo}/>)}
        </>
    ));
};
