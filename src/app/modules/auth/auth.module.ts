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
import { LoginComponent } from './components/login/login.component';
import { LoginEffect } from './store/effects/login.effects';
import { CurrentUserEffect } from './store/effects/current-user.effects';
import { ListErrorsModule } from '../common/modules/list-errors/list-errors.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ListErrorsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, CurrentUserEffect]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
