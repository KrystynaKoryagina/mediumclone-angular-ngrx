import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed/feed.service';
import { reducer } from './store/reducers/feed.reducers';
import { GetFeedEffect } from './store/effects/get-feed.effects';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    MatProgressBarModule,
    CommonModule,
    RouterModule,
    ErrorMessageModule,
    PaginationModule,
    StoreModule.forFeature('feed', reducer),
    EffectsModule.forFeature([GetFeedEffect]),
  ],
  providers: [FeedService],
  exports: [FeedComponent],
})
export class FeedModule {}
