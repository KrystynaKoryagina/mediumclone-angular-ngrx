import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { PersistenceService } from '../../../../modules/shared/services/persistence/persistence.service';
import { AuthService } from '../../services/auth/auth.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/currentUser.actions';
import { CurrentUser } from '../../../../models/user';

@Injectable()
export class CurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}

  currentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistenceService.get('accessToken');

        if (!token) {
          return of(getCurrentUserFailureAction());
        }

        return this.authService.getCurrentUser().pipe(
          map((user: CurrentUser) => getCurrentUserSuccessAction({ user })),
          catchError(() => of(getCurrentUserFailureAction()))
        );
      })
    )
  );
}
