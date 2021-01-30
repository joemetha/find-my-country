// tslint:disable: variable-name
import forOwn from 'lodash-es/forOwn';
import { ICountry, ICurrencies, ILanguages, IRegionalBlocs, ITranslations } from '../interfaces/country.interface';

export class Country implements ICountry {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: string[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: ICurrencies[];
  languages: ILanguages[];
  translations: ITranslations;
  flag: string;
  regionalBlocs: IRegionalBlocs[];
  cioc: string;

  constructor(country: ICountry) {
    if (country) {
      forOwn(country, (value, key) => {
        this[key] = value;
      });
    }
  }
}
