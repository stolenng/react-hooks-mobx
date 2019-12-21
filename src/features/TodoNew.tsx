import React, {KeyboardEvent, useState} from 'react';
import {useStore} from "../stores/helpers/use-store";

export const TodoNew = () => {
    const [newTodo, setTodo] = useState('');
    const todoList = useStore();

    const addTodo = () => {
        todoList.addTodo(newTodo);
        setTodo('');
    };

    const onEnterPress = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    return (
        <div>
            <input type="text" value={newTodo} onKeyDown={onEnterPress} onChange={(e) => setTodo(e.target.value)}/>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
};
