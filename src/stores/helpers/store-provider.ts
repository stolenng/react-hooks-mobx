import { createContext } from 'react';
import {TodoList} from "../todo-list";

export const StoreContext = createContext<TodoList>({} as TodoList);
export const StoreProvider = StoreContext.Provider;
