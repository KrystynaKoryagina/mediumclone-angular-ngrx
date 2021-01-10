import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../../../../models/appState';
import { AuthState } from '../authState.interface';

export const authFeatureSelector = createFeatureSelector<AppState, AuthState>('auth');

export const isSubmittingSelector = createSelector(authFeatureSelector, (state: AuthState) => state.isSubmitting);
export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.validationErrors
);
