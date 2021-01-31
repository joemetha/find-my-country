import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    MatButtonModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
})
export class MaterialFrameworkModule {}
