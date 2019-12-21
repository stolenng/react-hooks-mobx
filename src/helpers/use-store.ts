import { useContext } from 'react';
import { StoreContext } from './store-provider';
import {TodoList} from "../stores/todo-list";

export const useStore = (): TodoList => useContext(StoreContext);
