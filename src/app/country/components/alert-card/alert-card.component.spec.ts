import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialFrameworkModule } from '@app/shared/material-framework/material-framework.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AlertCardComponent } from './alert-card.component';

describe('AlertCardComponent', () => {
  let component: AlertCardComponent;
  let fixture: ComponentFixture<AlertCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertCardComponent ],
      imports: [
        MaterialFrameworkModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
