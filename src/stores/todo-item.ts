import {action, observable} from "mobx";

export default class TodoItem {
    id = Date.now();

    @observable text: string = '';
    @observable isDone: boolean = false;

    constructor(text: string) {
        this.text = text;
    }

    @action
    toggleIsDone = () => {
        this.isDone = !this.isDone
    }

    @action
    updateText = (text: string) => {
        this.text = text;
    }
}
