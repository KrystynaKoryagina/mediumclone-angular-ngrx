import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../../../../models/app-state';
import { AuthState } from '../auth-state.interface';

export const authFeatureSelector = createFeatureSelector<AppState, AuthState>('auth');

export const isSubmittingSelector = createSelector(authFeatureSelector, (state: AuthState) => state.isSubmitting);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.validationErrors
);

export const isLoggedInSelector = createSelector(authFeatureSelector, (state: AuthState) => state.isLoggedIn);

export const currentUserSelector = createSelector(authFeatureSelector, (state: AuthState) => state.user);
