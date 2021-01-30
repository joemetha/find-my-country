import * as fromLoading from './loading.reducer';

export interface AppState {
  loading: fromLoading.LoadingState;
}

export { fromLoading };
