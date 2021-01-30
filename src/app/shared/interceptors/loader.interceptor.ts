import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, LoadingActions } from '@app/store';
import { finalize } from 'rxjs/operators';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private store: Store<State>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isNotInBackground = !req.params.get('inBackground');

    if (isNotInBackground) {
      this.store.dispatch(LoadingActions.startLoading({ key: req.url }));
    }

    return next.handle(req).pipe(
      finalize(() => {
        setTimeout(() => {
          this.store.dispatch(LoadingActions.stopLoading({ key: req.url }));
        }, 400);
      })
    );
  }
}
