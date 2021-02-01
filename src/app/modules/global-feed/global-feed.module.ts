import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { GlobalFeedRoutingModule } from './global-feed-routing.module';
import { FeedModule } from '../common/modules/feed/feed.module';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, GlobalFeedRoutingModule, FeedModule],
})
export class GlobalFeedModule {}
