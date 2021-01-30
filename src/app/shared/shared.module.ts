import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFrameworkModule } from './material-framework/material-framework.module';
import { RouterModule } from '@angular/router';

// component
import { FullWidthLayoutComponent } from './layouts/full-width-layout/full-width-layout.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    FullWidthLayoutComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialFrameworkModule
  ],
  exports: [
    MaterialFrameworkModule,
    FullWidthLayoutComponent,
    NotFoundPageComponent
  ]
})
export class SharedModule { }
