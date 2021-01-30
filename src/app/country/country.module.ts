import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryRoutingModule } from './country-rounting.module';
import { RouterModule } from '@angular/router';
import { MaterialFrameworkModule } from '@app/shared/material-framework/material-framework.module';

// component
import { FindMyCountryPageComponent } from './pages/find-my-country-page/find-my-country-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [
    FindMyCountryPageComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    RouterModule,
    MaterialFrameworkModule,
  ]
})
export class CountryModule { }
