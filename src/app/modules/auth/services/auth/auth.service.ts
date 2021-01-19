import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthResponse, LoginRequest, RegisterRequest } from '../../../../models/auth';
import { CurrentUser } from '../../../../models/user';

@Injectable()
export class AuthService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.baseUrl}`;
  }

  register(body: RegisterRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/users`, body).pipe(pluck('user'));
  }

  login(body: LoginRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/users/login`, body).pipe(pluck('user'));
  }

  getCurrentUser(): Observable<CurrentUser> {
    return this.http.get<AuthResponse>(`${this.apiUrl}/user`).pipe(pluck('user'));
  }
}
