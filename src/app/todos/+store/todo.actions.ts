import { createAction, props } from '@ngrx/store';
import { FilterTypes } from '../models/filter.types';

export const createTodo = createAction(
	'[TODO] Create todo',
	props<{ text: string }>()
);

export const checkmarkTodo = createAction(
	'[TODO] Checkmark todo',
	props<{ id: number }>()
);

export const editTodo = createAction(
	'[TODO] Edit todo',
	props<{ id: number, text: string }>()
);

export const deleteTodo = createAction(
	'[TODO] Delete todo',
	props<{ id: number }>()
);

export const toggleAllTodo = createAction(
	'[TODO] Toggle all todos',
	props<{ complete: boolean }>()
);

export const cleanCompleted = createAction(
	'[TODO] Clear all completed todos'
);
