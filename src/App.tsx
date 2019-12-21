import React from 'react';
import './App.css';
import {TodoList} from "./features/TodoList";
import {TodoNew} from "./features/TodoNew";

const App = () => {
    return (
        <div className="App">
            <TodoNew/>
            <TodoList/>
        </div>
    );
}

export default App;
