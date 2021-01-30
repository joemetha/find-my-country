import { Component, OnInit } from '@angular/core';
import { Country } from '@country/models/country.class';
import { CountryActions, CountrySelectors, CountryState } from '@country/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'fmc-find-my-country-page',
  templateUrl: './find-my-country-page.component.html',
  styleUrls: ['./find-my-country-page.component.scss']
})
export class FindMyCountryPageComponent implements OnInit {
  public countries$: Observable<Country[]>;

  constructor(
    private store: Store<{ country: CountryState }>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(CountryActions.loadCountriesData());
    this.countries$ = this.store.select(CountrySelectors.getCountries);
  }
}
