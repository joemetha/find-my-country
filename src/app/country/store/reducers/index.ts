import { ActionReducerMap } from '@ngrx/store';
import * as fromCountry from './country.reducer';


export { fromCountry };

export interface CountryState {
  [fromCountry.countryFeatureKey]: fromCountry.CountryState;
}

export const reducers: ActionReducerMap<CountryState> = {
  country: fromCountry.reducer,
};
