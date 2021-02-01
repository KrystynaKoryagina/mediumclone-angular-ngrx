import { Article } from './article';

export interface FeedResponse {
  articles: Article[];
  articlesCount: number;
}
