import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListErrorsComponent } from './components/list-errors/list-errors.component';

@NgModule({
  declarations: [ListErrorsComponent],
  imports: [CommonModule],
  exports: [ListErrorsComponent],
})
export class ListErrorsModule {}
