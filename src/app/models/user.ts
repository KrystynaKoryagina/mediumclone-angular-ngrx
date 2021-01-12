export interface UserRegister {
  username: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface CurrentUser {
  id: number;
  username: string;
  email: string;
  updatedAt: string;
  createdAt: string;
  token: string;
  bio?: string;
  image?: string;
}
