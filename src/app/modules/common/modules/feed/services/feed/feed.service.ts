import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../../../../environments/environment';
import { FeedResponse } from '../../../../../../models/feed';
import { PageRequest } from '../../../../../../models/pagination';
import { PageRequestConverter } from '../../../../../../utills/page-request-converter';

@Injectable()
export class FeedService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.baseUrl}/articles`;
  }

  getFeed(pageRequest: PageRequest, isGlobalFeed: boolean): Observable<FeedResponse> {
    const feedRequestUrl = `${this.baseUrl}/feed`;
    const requestUrl = isGlobalFeed ? this.baseUrl : feedRequestUrl;
    const params = PageRequestConverter.convertToHttpParams(pageRequest);

    return this.http.get<FeedResponse>(requestUrl, { params });
  }
}
