import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFrameworkModule } from './material-framework/material-framework.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialFrameworkModule
  ],
  exports: [
    MaterialFrameworkModule
  ]
})
export class SharedModule { }
