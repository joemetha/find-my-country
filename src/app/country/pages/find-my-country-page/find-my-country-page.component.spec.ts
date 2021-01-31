import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertCardComponent } from '@app/country/components/alert-card/alert-card.component';
import { SearchInputComponent } from '@app/country/components/search-input/search-input.component';
import { TableComponent } from '@app/country/components/table/table.component';
import { ICountry } from '@app/country/interfaces/country.interface';
import { MaterialFrameworkModule } from '@app/shared/material-framework/material-framework.module';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { FindMyCountryPageComponent } from './find-my-country-page.component';

class StoreMock {
  modal = {} as ICountry;
  select =  jasmine.createSpy().and.returnValue(of([this.modal]));
  dispatch = jasmine.createSpy();
}

describe('FindMyCountryPageComponent', () => {
  let component: FindMyCountryPageComponent;
  let fixture: ComponentFixture<FindMyCountryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FindMyCountryPageComponent,
        AlertCardComponent,
        TableComponent,
        SearchInputComponent
      ],
      imports: [
        MaterialFrameworkModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        BrowserAnimationsModule
      ],
      providers: [{ provide: Store, useClass: StoreMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMyCountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
