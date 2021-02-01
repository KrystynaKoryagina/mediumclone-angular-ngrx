import { createAction, props } from '@ngrx/store';

import { BackendErrors } from '../../../../models/backend-errors';
import { LoginRequest } from '../../../../models/auth';
import { CurrentUser } from '../../../../models/user';
import { AuthActionTypes } from './auth-action';

export const loginAction = createAction(AuthActionTypes.LOGIN, props<{ loginBody: LoginRequest }>());

export const loginSuccessAction = createAction(AuthActionTypes.LOGIN_SUCCESS, props<{ user: CurrentUser }>());

export const loginFailureAction = createAction(AuthActionTypes.LOGIN_FAILURE, props<{ errors: BackendErrors }>());
