import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '@app/app-routing.module';
import { FullWidthLayoutComponent } from '@app/shared/layouts/full-width-layout/full-width-layout.component';
import { MaterialFrameworkModule } from '@app/shared/material-framework/material-framework.module';

import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundPageComponent, FullWidthLayoutComponent ],
      imports: [
        RouterModule,
        AppRoutingModule,
        MaterialFrameworkModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
