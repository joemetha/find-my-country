import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store';
@Component({
  selector: 'fmc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  public isLoading$: Observable<boolean>;

  constructor(
    private rootStore: Store<fromStore.AppState>,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.observeStates();
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  // observe loading status of the application -> for show/hide the progress bar
  observeStates(): void {
    this.isLoading$ = this.rootStore.select(fromStore.LoadingSelectors.getIsLoading);
  }
}
