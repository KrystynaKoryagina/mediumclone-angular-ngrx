import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PageRequest } from '../../../../../../models/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Output() selectedPage = new EventEmitter<number>();
  @Input() totalItems: number;
  @Input() limit: number = 10;

  private currentPage = 1;

  isActivePage(page: number): boolean {
    return page === this.currentPage;
  }

  selectePage(page: number): void {
    this.currentPage = page;
    this.selectedPage.emit(page);
  }

  get pageNumbers(): number[] {
    return this.pages.map((page) => page + 1);
  }

  get pages(): number[] {
    return [...Array(this.pagesCount).keys()];
  }

  get pagesCount(): number {
    return Math.ceil(this.totalItems / this.limit);
  }
}
