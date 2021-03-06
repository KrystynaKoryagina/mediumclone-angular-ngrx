import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth/auth.service';
import { CurrentUser } from '../../../../models/user';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.actions';
import { PersistenceService } from '../../../common/services/persistence/persistence.service';

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ registerBody }) => {
        return this.authService.register(registerBody).pipe(
          map((user: CurrentUser) => {
            this.persistenceService.set('accessToken', user.token);
            return registerSuccessAction({ user });
          }),
          catchError((errorsResponse: HttpErrorResponse) =>
            of(registerFailureAction({ errors: errorsResponse.error.errors }))
          )
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => this.router.navigateByUrl('/'))
      ),
    { dispatch: false }
  );
}
