import { Country } from '@app/country/models/country.class';
import { Action, createReducer, on } from '@ngrx/store';
import { CountryActions } from '../actions';

export const countryFeatureKey = 'country';

export interface CountryState {
  countries: Country[];
}

export const initialState: CountryState = {
  countries: null,
};

const countryReducer = createReducer(
  initialState,

  on(CountryActions.loadCountriesDataSuccess, (state, { countries }) => ({
    ...state,
    countries
  }))
);

export function reducer(state: CountryState | undefined, action: Action): any {
  return countryReducer(state, action);
}
