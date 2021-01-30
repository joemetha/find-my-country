import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullWidthLayoutComponent } from './shared/layouts/full-width-layout/full-width-layout.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./country/country.module').then(m => m.CountryModule)
  },
  {
    path: '**',
    component: FullWidthLayoutComponent,
    children: [
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
