import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth/auth.service';
import { CurrentUser } from '../../../../models/user';
import { PersistenceService } from '../../../common/services/persistence/persistence.service';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.actions';

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ loginBody }) => {
        return this.authService.login(loginBody).pipe(
          map((user: CurrentUser) => {
            this.persistenceService.set('accessToken', user.token);
            return loginSuccessAction({ user });
          }),
          catchError((errorsResponse: HttpErrorResponse) =>
            of(loginFailureAction({ errors: errorsResponse.error.errors }))
          )
        );
      })
    )
  );

  loginAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => this.router.navigateByUrl('/'))
      ),
    { dispatch: false }
  );
}
