import { createAction, props } from '@ngrx/store';

import { BackendErrors } from '../../../../models/backendErrors';
import { RegisterRequest } from '../../../../models/auth';
import { CurrentUser } from '../../../../models/user';
import { AuthActionTypes } from './actionTypes';

export const registerAction = createAction(AuthActionTypes.REGISTER, props<{ registerBody: RegisterRequest }>());
export const registerSuccessAction = createAction(AuthActionTypes.REGISTER_SUCCESS, props<{ user: CurrentUser }>());
export const registerFailureAction = createAction(AuthActionTypes.REGISTER_FAILURE, props<{ errors: BackendErrors }>());
