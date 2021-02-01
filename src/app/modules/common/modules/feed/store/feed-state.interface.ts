import { FeedResponse } from '../../../../../models/feed';

export interface FeedState {
  isLoading: boolean;
  data: FeedResponse;
  error: string;
}
