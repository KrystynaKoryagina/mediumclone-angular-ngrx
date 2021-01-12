import { BackendErrors } from '../../../models/backendErrors';
import { CurrentUser } from '../../../models/user';

export interface AuthState {
  isSubmitting: boolean;
  isLoggedIn: boolean;
  user: CurrentUser;
  validationErrors: BackendErrors;
}