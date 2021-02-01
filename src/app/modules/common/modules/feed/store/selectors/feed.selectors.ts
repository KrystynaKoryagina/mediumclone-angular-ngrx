import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../../../../../../models/app-state';
import { FeedState } from '../feed-state.interface';

export const feedFeatureSelector = createFeatureSelector<AppState, FeedState>('feed');

export const isLoadingSelector = createSelector(feedFeatureSelector, (state: FeedState) => state.isLoading);

export const feedSelector = createSelector(feedFeatureSelector, (state: FeedState) => state.data);
