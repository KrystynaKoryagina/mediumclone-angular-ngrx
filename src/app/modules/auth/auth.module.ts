import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { reducer } from './store/reducers/auth.reducers';
import { AuthService } from './services/auth/auth.service';
import { RegisterEffect } from './store/effects/register.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
