import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { registerAction } from '../../store/actions/register.actions';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors/auth.selectors';
import { RegisterRequest } from '../../../../models/auth';
import { BackendErrors } from '../../../../models/backendErrors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private readonly destroy$: Subject<void> = new Subject();

  registerForm: FormGroup;
  isSubmitting: boolean;
  validationErrors$: Observable<BackendErrors>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initRegisterForm();
    this.initValues();
  }

  private initRegisterForm(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
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
    const registerBody: RegisterRequest = {
      user: this.registerForm.value,
    };

    this.store.dispatch(registerAction({ registerBody }));
  }

  get isSignUpDisabled(): boolean {
    return this.registerForm.invalid || this.isSubmitting;
  }
}
