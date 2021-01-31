import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { CountryActions } from '@country/store/actions';
import { CountryService } from '@country/services/country.service';
import { Country } from '@country/models/country.class';

@Injectable()
export class CountryEffects {
  @Effect()
  loadCountriesData$ = this.actions$.pipe(
    ofType(CountryActions.loadCountriesData),
    exhaustMap(() => this.countryService
      .getAllCountriesData()
      .pipe(
        map((respone: Country[]) => CountryActions.loadCountriesDataSuccess({ countries: respone })),
        catchError(error => of(CountryActions.loadCountriesDataError({ error })))
      ))
  );

  constructor(
    private actions$: Actions,
    private countryService: CountryService,
  ) { }
}
