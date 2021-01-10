import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListErrorsComponent } from './components/list-errors/list-errors.component';
import { PersistenceService } from './services/persistence/persistence.service';

@NgModule({
  declarations: [ListErrorsComponent],
  exports: [ListErrorsComponent],
  imports: [CommonModule],
  providers: [PersistenceService],
})
export class SharedModule {}
