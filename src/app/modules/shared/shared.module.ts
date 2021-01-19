import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListErrorsComponent } from './components/list-errors/list-errors.component';

@NgModule({
  declarations: [ListErrorsComponent],
  exports: [ListErrorsComponent],
  imports: [CommonModule],
})
export class SharedModule {}
