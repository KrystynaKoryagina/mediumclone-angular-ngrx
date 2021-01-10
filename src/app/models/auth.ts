import { CurrentUser, UserRegister } from './user';

export interface RegisterRequest {
  user: UserRegister;
}

export interface AuthResponse {
  user: CurrentUser;
}
