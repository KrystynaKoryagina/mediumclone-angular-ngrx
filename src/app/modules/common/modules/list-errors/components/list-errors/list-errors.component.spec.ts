import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListErrorsComponent } from './list-errors.component';

describe('ListErrorsComponent', () => {
  let component: ListErrorsComponent;
  let fixture: ComponentFixture<ListErrorsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListErrorsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
