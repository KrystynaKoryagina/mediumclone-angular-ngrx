import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlobalFeedComponent } from './global-feed.component';

describe('GlobalFeedComponent', () => {
  let component: GlobalFeedComponent;
  let fixture: ComponentFixture<GlobalFeedComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GlobalFeedComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
