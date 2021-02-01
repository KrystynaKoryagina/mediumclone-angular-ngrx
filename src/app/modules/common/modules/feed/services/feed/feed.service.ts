import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../../../../environments/environment';
import { FeedResponse } from '../../../../../../models/feed';

@Injectable()
export class FeedService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.baseUrl}/articles`;
  }

  getFeed(isGlobalFeed: boolean): Observable<FeedResponse> {
    const feedRequestUrl = `${this.baseUrl}/feed`;
    const requestUrl = isGlobalFeed ? this.baseUrl : feedRequestUrl;

    return this.http.get<FeedResponse>(requestUrl);
  }
}
