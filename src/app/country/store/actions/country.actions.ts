import { Country } from '@country/models/country.class';
import { createAction, props } from '@ngrx/store';

export const loadCountriesData = createAction(
  '[Country] Load All Countries Data'
);

export const loadCountriesDataSuccess = createAction(
  '[Country] Load All Countries Data Success',
  props<{
    countries: Country[];
  }>()
);

export const loadCountriesDataError = createAction(
  '[Country] Load All Countries Data Error',
  props<{
    error: any;
  }>()
);
