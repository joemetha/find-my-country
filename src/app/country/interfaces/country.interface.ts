export interface ICountry {
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
}

export interface ICurrencies {
  code: string;
  name: string;
  symbol: string;
}

export interface ILanguages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface ITranslations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
}

export interface IRegionalBlocs {
  acronym: string;
  name: string;
  otherAcronyms: any[];
  otherNames: any[];
}
