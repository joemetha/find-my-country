import { Action, createReducer, on } from '@ngrx/store';
import * as LoadingActions from '../actions/loading.actions';

export const loadingFeatureKey = 'loading';

export interface LoadingState {
  keys: string[];
}

export const initialState: LoadingState = {
  keys: []
};

const loadingReducer = createReducer(
  initialState,

  on(LoadingActions.startLoading, (state, { key }) => ({
    ...state,
    keys: [ ...state.keys, key ]
  })),

  on(LoadingActions.stopLoading, (state, { key }) => {
    const keys = [...state.keys];
    const index = keys.indexOf(key);
    if (index > -1) {
      keys.splice(index, 1);
    }
    return {
      ...state,
      keys
    };
  })
);

export function reducer(state: LoadingState | undefined, action: Action): any {
  return loadingReducer(state, action);
}
