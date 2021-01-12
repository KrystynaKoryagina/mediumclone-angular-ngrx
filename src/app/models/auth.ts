import { CurrentUser, UserLogin, UserRegister } from './user';

export interface RegisterRequest {
  user: UserRegister;
}

export interface LoginRequest {
  user: UserLogin;
}

export interface AuthResponse {
  user: CurrentUser;
}
