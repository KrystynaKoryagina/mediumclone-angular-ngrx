import { Action, createReducer, on } from '@ngrx/store';

import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.actions';
import { AuthState } from '../authState.interface';

const initialState: AuthState = {
  isSubmitting: false,
  isLoggedIn: false,
  user: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(registerSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    user: action.user,
  })),
  on(registerFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  }))
);

export function reducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}
