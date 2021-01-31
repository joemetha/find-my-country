import { Component, OnInit } from '@angular/core';
import { Country } from '@country/models/country.class';
import { CountrySelectors, CountryState } from '@country/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'fmc-find-my-country-page',
  templateUrl: './find-my-country-page.component.html',
  styleUrls: ['./find-my-country-page.component.scss']
})
export class FindMyCountryPageComponent implements OnInit {
  public countries$: Observable<Country[]>;
  public serachByCountry: string;

  constructor(
    private store: Store<{ country: CountryState }>
  ) { }

  ngOnInit(): void {
    this.countries$ = this.store.select(CountrySelectors.getCountries);
  }

  updateTable(event: KeyboardEvent): void {
    this.serachByCountry = (event.target as HTMLInputElement).value;
  }
}
