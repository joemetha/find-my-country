import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
})
export class MaterialFrameworkModule {}
