import { useContext } from 'react';
import { StoreContext } from './store-provider';
import {TodoList} from "../todo-list";

export const useStore = (): TodoList => useContext(StoreContext);
