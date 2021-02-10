import { Action, createReducer, on } from '@ngrx/store';

import { FeedState } from '../feed-state.interface';
import { feedAction, feedFailureAction, feedSuccessAction } from '../actions/get-feed.actions';

const initialState: FeedState = {
  isLoading: false,
  data: null,
  error: '',
};

const feedReducer = createReducer(
  initialState,
  on(feedAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(feedSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.feed,
  })),
  on(feedFailureAction, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);

export function reducer(state: FeedState, action: Action) {
  return feedReducer(state, action);
}
