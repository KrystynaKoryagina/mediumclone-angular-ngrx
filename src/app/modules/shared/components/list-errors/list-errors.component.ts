import { Component, Input } from '@angular/core';

import { BackendErrors } from '../../../../models/backendErrors';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.scss'],
})
export class ListErrorsComponent {
  @Input() errors: BackendErrors;

  get errorMessages(): string[] {
    return Object.entries(this.errors).map(([key, value]) => `${key} ${value}`);
  }
}
