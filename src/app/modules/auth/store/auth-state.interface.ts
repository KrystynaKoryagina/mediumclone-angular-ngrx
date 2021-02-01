import { BackendErrors } from '../../../models/backend-errors';
import { CurrentUser } from '../../../models/user';

export interface AuthState {
  isSubmitting: boolean;
  isLoggedIn: boolean;
  isLoading: boolean;
  user: CurrentUser;
  validationErrors: BackendErrors;
}
