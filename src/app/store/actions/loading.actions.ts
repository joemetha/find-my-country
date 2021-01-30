import { createAction, props } from '@ngrx/store';

export const startLoading = createAction(
  '[Loading] Start Loading',
  props<{ key: string }>()
);

export const stopLoading = createAction(
  '[Loading] Stop Loading',
  props<{ key: string }>()
);
