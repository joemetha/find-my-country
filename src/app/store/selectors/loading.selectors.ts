import {
  createSelector
} from '@ngrx/store';
import { AppState } from '@app/store/reducers';

export const selectLoading = (state: AppState) => state.loading;

export const getIsLoading = createSelector(
  selectLoading,
  (state) => {
    return !!state.keys.length;
  }
);

export const getLoadings = createSelector(
  selectLoading,
  (state) => {
    return state.keys;
  }
);
