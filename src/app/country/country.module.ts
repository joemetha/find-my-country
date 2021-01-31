import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryRoutingModule } from './country-rounting.module';
import { RouterModule } from '@angular/router';
import { MaterialFrameworkModule } from '@app/shared/material-framework/material-framework.module';

// store
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './store/effects/country.effects';


// component
import { FindMyCountryPageComponent } from './pages/find-my-country-page/find-my-country-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { AlertCardComponent } from './components/alert-card/alert-card.component';

// service
import { CountryService } from './services/country.service';

// resolver
import { CountryResolver } from './resolvers/country.resolver';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    FindMyCountryPageComponent,
    SearchInputComponent,
    TableComponent,
    AlertCardComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    RouterModule,
    MaterialFrameworkModule,
    StoreModule.forFeature('country', reducers),
    EffectsModule.forFeature([
      CountryEffects,
    ]),
  ],
  providers: [
    CountryService,
    CountryResolver
  ]
})
export class CountryModule { }
