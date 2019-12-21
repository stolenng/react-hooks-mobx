import { createContext } from 'react';
import {TodoList} from "../stores/todo-list";

export const StoreContext = createContext<TodoList>({} as TodoList);
export const StoreProvider = StoreContext.Provider;
