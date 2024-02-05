import { createAction, props } from '@ngrx/store';

export const navigateTo = createAction(
  '[App] Navigate To',
  props<{ component: string }>()
);
