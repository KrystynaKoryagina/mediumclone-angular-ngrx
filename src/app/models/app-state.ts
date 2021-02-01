import { FeedState } from '../modules/common/modules/feed/store/feed-state.interface';
import { AuthState } from '../modules/auth/store/auth-state.interface';

export interface AppState {
  auth: AuthState;
  feed: FeedState;
}
