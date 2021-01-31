import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Country } from '@country/models/country.class';
import { CountryActions, CountryState } from '@country/store';

@Injectable()
export class CountryResolver implements Resolve<Observable<Country[]>> {

  constructor(
    private store: Store<{ country: CountryState }>
  ) { }

  resolve(): any {
    return this.store.dispatch(CountryActions.loadCountriesData());
  }
}
