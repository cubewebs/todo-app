import { createReducer, on } from '@ngrx/store';
import { FilterTypes } from '../models/filter.types';
import * as fromActions from './filter.actions';


export const filterInitialState: FilterTypes = 'all';

export const filterReducer = createReducer<FilterTypes>(
    filterInitialState,
  on(fromActions.filterTodos, (state, { filter }) => filter),
);