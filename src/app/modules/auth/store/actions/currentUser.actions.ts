import { createAction, props } from '@ngrx/store';

import { CurrentUser } from '../../../../models/user';
import { AuthActionTypes } from './actionTypes';

export const getCurrentUserAction = createAction(AuthActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  AuthActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ user: CurrentUser }>()
);

export const getCurrentUserFailureAction = createAction(AuthActionTypes.GET_CURRENT_USER_FAILURE);
