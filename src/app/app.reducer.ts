import { ActionReducerMap } from "@ngrx/store";
import { filterReducer } from "./todos/+filter-store/filter.reducers";
import { todoReducer } from "./todos/+store/todo.reducers";
import { FilterTypes } from "./todos/models/filter.types";
import { Todo } from "./todos/models/todo.model";



export interface AppState {

    todos: Todo[];
    filter: FilterTypes;

};

export const appReducers: ActionReducerMap<AppState> = {

    todos: todoReducer,
    filter: filterReducer

};