import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '@app/app-routing.module';
import { MaterialFrameworkModule } from '@app/shared/material-framework/material-framework.module';
import { NotFoundPageComponent } from '@app/shared/pages/not-found-page/not-found-page.component';

import { FullWidthLayoutComponent } from './full-width-layout.component';

describe('FullWidthLayoutComponent', () => {
  let component: FullWidthLayoutComponent;
  let fixture: ComponentFixture<FullWidthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullWidthLayoutComponent, NotFoundPageComponent ],
      imports: [
        RouterModule,
        AppRoutingModule,
        MaterialFrameworkModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
