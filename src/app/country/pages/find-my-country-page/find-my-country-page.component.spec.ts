import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMyCountryPageComponent } from './find-my-country-page.component';

describe('FindMyCountryPageComponent', () => {
  let component: FindMyCountryPageComponent;
  let fixture: ComponentFixture<FindMyCountryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMyCountryPageComponent ]
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
