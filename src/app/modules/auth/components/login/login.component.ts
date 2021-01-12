import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BackendErrors } from '../../../../models/backendErrors';
import { LoginRequest } from '../../../../models/auth';
import { loginAction } from '../../store/actions/login.actions';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private readonly destroy$: Subject<void> = new Subject();

  loginForm: FormGroup;
  isSubmitting: boolean;
  validationErrors$: Observable<BackendErrors>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initLoginForm();
    this.initValues();
  }

  private initLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  private initValues(): void {
    this.store.pipe(select(isSubmittingSelector), takeUntil(this.destroy$)).subscribe({
      next: (value: boolean) => {
        this.isSubmitting = value;
      },
    });

    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    const loginBody: LoginRequest = {
      user: this.loginForm.value,
    };

    this.store.dispatch(loginAction({ loginBody }));
  }

  get isSignInDisabled(): boolean {
    return this.loginForm.invalid || this.isSubmitting;
  }
}
