import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { FullWidthLayoutComponent } from '@app/shared/layouts/full-width-layout/full-width-layout.component';
import { FindMyCountryPageComponent } from './pages/find-my-country-page/find-my-country-page.component';

// resolver
import { CountryResolver } from './resolvers/country.resolver';

const routes: Routes = [
  {
    path: '',
    component: FullWidthLayoutComponent,
    children: [
      {
        path: '',
        component: FindMyCountryPageComponent,
        resolve: {
          country: CountryResolver,
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
