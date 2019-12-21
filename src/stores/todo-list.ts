import {action, observable} from "mobx";
import TodoItem from "./todo-item";

export class TodoList {
    @observable.shallow list: TodoItem[] = [];

    constructor(todos: string[]) {
        todos.forEach(this.addTodo);
    }

    @action
    addTodo = (text: string) => {
        this.list.push(new TodoItem(text));
    }
}
