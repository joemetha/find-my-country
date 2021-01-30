import {
  createSelector
} from '@ngrx/store';
import { fromCountry, CountryState } from '@country/store';

export const selectCountry = (state: { country: CountryState }) => state.country.country;

export const getCountries = createSelector(
  selectCountry,
  (state: fromCountry.CountryState) => {
    return state.countries;
  }
);
