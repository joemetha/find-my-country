import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFrameworkModule } from './material-framework/material-framework.module';
import { RouterModule } from '@angular/router';

// component
import { FullWidthLayoutComponent } from './full-width-layout/full-width-layout.component';

@NgModule({
  declarations: [
    FullWidthLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialFrameworkModule
  ],
  exports: [
    MaterialFrameworkModule,
    FullWidthLayoutComponent
  ]
})
export class SharedModule { }
