import { createAction, props } from '@ngrx/store';

import { FeedActionsTypes } from './feed-actions';
import { FeedResponse } from '../../../../../../models/feed';

export const feedAction = createAction(FeedActionsTypes.GET_FEED, props<{ isGlobalFeed: boolean }>());

export const feedSuccessAction = createAction(FeedActionsTypes.GET_FEED_SUCCESS, props<{ feed: FeedResponse }>());

export const feedFailureAction = createAction(FeedActionsTypes.GET_FEED_FAILURE, props<{ error: string }>());
