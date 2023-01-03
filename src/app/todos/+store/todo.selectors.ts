import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducers from './todo.reducers';


export const selectFeature = createFeatureSelector<reducers.AppState>(reducers.reducerFeatureKey)

export const selectTodos = createSelector(
    selectFeature,
  (state: reducers.AppState) => console.log('todo', state.todos)
);