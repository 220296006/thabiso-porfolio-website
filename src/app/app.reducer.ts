import { createReducer, on } from '@ngrx/store';
import { navigateTo } from './app.actions';

export interface AppState {
  currentComponent: string;
}

export const initialState: AppState = {
  currentComponent: 'home', // set the initial component
};

export const appReducer = createReducer(
  initialState,
  on(navigateTo, (state, { component }) => ({ ...state, currentComponent: component }))
);
