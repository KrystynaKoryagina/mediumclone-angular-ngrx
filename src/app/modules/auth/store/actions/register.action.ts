import { createAction, props } from '@ngrx/store';

import { UserRegister } from '../../../../models/user.model';
import { AuthActionTypes } from '../actionTypes';

export const registerAction = createAction(AuthActionTypes.REGISTER, props<UserRegister>());
