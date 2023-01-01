import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';

import * as actions from './todo.actions';


export const reducerFeatureKey = 'todos';

export interface AppState {
    todos: Todo[],
}


export const todoInitialState: Todo[] = [
	new Todo('Salvar el mundo'),
	new Todo('Vencer a Thanos'),
	new Todo('Comprar traje de Ironman'),
	new Todo('Robar escudo de Capitan América'),
];

export const todoReducer = createReducer(
	todoInitialState,
on(actions.createTodo, (state, action) => [...state, new Todo( action.text )]),
on(actions.checkmarkTodo, (state, { id }) => {

	return state.map( todo => {

		if(todo.id === id) {
			return {
				...todo,
				complete: !todo.complete
			}
		} else {
			return todo;
		}

	})
	
}),
on(actions.editTodo, (state, { id, text }) => {

	return state.map( todo => {

		if(todo.id === id) {
			return {
				...todo,
				text
			}
		} else {
			return todo;
		}

	})

}),
on(actions.deleteTodo, (state, { id }) => state.filter( todo => todo.id !== id)),
on(actions.toggleAllTodo, (state, { complete }) => state.map( todo => {
	return {
		...todo,
		complete
	}
}) )
);