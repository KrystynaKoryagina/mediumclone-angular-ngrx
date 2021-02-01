import { createAction, props } from '@ngrx/store';

import { BackendErrors } from '../../../../models/backend-errors';
import { RegisterRequest } from '../../../../models/auth';
import { CurrentUser } from '../../../../models/user';
import { AuthActionTypes } from './auth-action';

export const registerAction = createAction(AuthActionTypes.REGISTER, props<{ registerBody: RegisterRequest }>());

export const registerSuccessAction = createAction(AuthActionTypes.REGISTER_SUCCESS, props<{ user: CurrentUser }>());

export const registerFailureAction = createAction(AuthActionTypes.REGISTER_FAILURE, props<{ errors: BackendErrors }>());
