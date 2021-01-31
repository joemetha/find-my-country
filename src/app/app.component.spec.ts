import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { MaterialFrameworkModule } from './shared/material-framework/material-framework.module';
import { ROOT_REDUCERS, metaReducers } from './store';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialFrameworkModule,
        StoreModule.forRoot(ROOT_REDUCERS, {
          metaReducers,
        }),
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
