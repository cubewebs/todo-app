import { createAction, props } from '@ngrx/store';
import { FilterTypes } from '../models/filter.types';

export const filterTodos = createAction(
    '[Counter Component] Increment',
    props<{ filter: FilterTypes }>()
);