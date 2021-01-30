import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.class';
import { ICountry } from '../interfaces/country.interface';
import { map } from 'rxjs/operators';
import { environment } from '@src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCountriesData(): Observable<Country[]> {
    const endpoint = environment.endpoints.base + environment.endpoints.countries;

    return this.http
      .get<ICountry[]>(endpoint)
      .pipe(
        map((response: ICountry[]) => {
          return response.map(country => new Country(country));
        })
      );
  }
}
