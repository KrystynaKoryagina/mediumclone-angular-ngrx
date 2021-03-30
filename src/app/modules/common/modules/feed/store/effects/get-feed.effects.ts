import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { FeedResponse } from '../../../../../../models/feed';
import { FeedService } from '../../services/feed/feed.service';
import { feedAction, feedFailureAction, feedSuccessAction } from '../actions/get-feed.actions';

@Injectable()
export class GetFeedEffect {
  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(feedAction),
      switchMap(({ pageRequest, isGlobalFeed }) => {
        return this.feedService.getFeed(pageRequest, isGlobalFeed).pipe(
          map((feed: FeedResponse) => feedSuccessAction({ feed })),
          catchError((err: HttpErrorResponse) => of(feedFailureAction({ error: err.error })))
        );
      })
    )
  );
}
