import { Component, Input, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

import { PageRequest } from '../../../../../../models/pagination';
import { FeedResponse } from '../../../../../../models/feed';
import { feedAction } from '../../store/actions/get-feed.actions';
import { errorFeedSelector, feedSelector, isLoadingSelector } from '../../store/selectors/feed.selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() isGlobalFeed = true;

  isLoading$: Observable<boolean>;
  feed$: Observable<FeedResponse>;
  error$: Observable<string>;

  private pageRequest: PageRequest = {
    limit: 10,
    offset: 0,
  };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getFeeds();
    this.initValues();
  }

  setPageRequest(page: number): void {
    const { limit } = this.pageRequest;

    this.pageRequest = {
      ...this.pageRequest,
      offset: limit * page - limit,
    };

    this.getFeeds();
  }

  private getFeeds(): void {
    this.store.dispatch(feedAction({ pageRequest: this.pageRequest, isGlobalFeed: this.isGlobalFeed }));
  }

  private initValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorFeedSelector));
  }
}
