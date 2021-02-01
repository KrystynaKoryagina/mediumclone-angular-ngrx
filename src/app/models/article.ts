import { Profile } from './profile';

export interface Article {
  author: Profile;
  body: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  createdAt: string;
  updatedAt: string;
}
