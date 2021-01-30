import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { CountryActions } from '../actions';
import { CountryService } from '@app/country/services/country.service';
import { Country } from '@app/country/models/country.class';

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

  // @Effect()
  // loadCountrysData$ = this.actions$.pipe(
  //   ofType(CountryActions.loadCountryData),
  //   exhaustMap(({ CountryFilter, redirectPath, callbackOnSuccess, callbackOnError }) => this.CountryService
  //     .getCountryData(CountryFilter)
  //     .pipe(
  //       map((respone) => {
  //         if (respone) {
  //           return CountryActions.loadCountryDataSuccess({
  //             Country: respone,
  //             redirectPath,
  //             callbackOnSuccess
  //           });
  //         } else {
  //           return CountryActions.loadCountryDataError({ error: { status: 404 }, callbackOnError });
  //         }
  //       }),
  //       catchError(error => of(CountryActions.loadCountryDataError({ error, callbackOnError })))
  //     ))
  // );

  // @Effect()
  // loadCountrysSuccess$ = this.actions$.pipe(
  //   ofType(CountryActions.loadCountryDataSuccess),
  //   tap(({ redirectPath }) => {
  //     if (!redirectPath) { return; }

  //     this.router.navigateByUrl(redirectPath);
  //   }),
  //   map(({ callbackOnSuccess }) => {
  //     if (callbackOnSuccess) {
  //       return callbackOnSuccess();
  //     }

  //     return { type: 'DO NOTHING' };
  //   })
  // );

  // @Effect()
  // loadCountrysDataError$ = this.actions$.pipe(
  //   ofType(CountryActions.loadCountryDataError),
  //   map(({ callbackOnError }) => {
  //     if (callbackOnError) {
  //       return callbackOnError();
  //     }

  //     return { type: 'DO NOTHING' };
  //   })
  // );

  constructor(
    private actions$: Actions,
    private countryService: CountryService,
  ) { }
}
