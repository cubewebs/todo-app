import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';

import * as actions from './todo.actions';


export const reducerFeatureKey = 'todo';


export interface TodoState {
	todo: Todo[];
};

export const todoInitialState: TodoState = {
	todo: [],
};

export const todoReducer = createReducer(
	todoInitialState,
on(actions.createTodo, (state, action) => (
{ ...state, todo: [new Todo( action.text)] }
)),
);