import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryActions } from '@app/country/store';
import { Actions, ofType } from '@ngrx/effects';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fmc-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.scss']
})
export class AlertCardComponent implements OnInit, OnDestroy {
  public showAlert = false;
  public errorMessage = '';
  private subscribeShowAlert$: Subscription;

  constructor(
    private actions$: Actions
  ) { }

  ngOnInit(): void {
    this.subscribeActions();
  }

  ngOnDestroy(): void {
    if (this.subscribeShowAlert$) {
      this.subscribeShowAlert$.unsubscribe();
    }
  }

  // subscribe the country loading action, if it fail -> show the alert card
  subscribeActions(): void {
    this.subscribeShowAlert$ = this.actions$
      .pipe(
        ofType(CountryActions.loadCountriesDataError)
      )
      .subscribe(this.showAlertCard.bind(this));
  }

  showAlertCard({error}): void {
    if (error) {
      this.showAlert = true;
      this.errorMessage = error.message;
    }
  }
}
