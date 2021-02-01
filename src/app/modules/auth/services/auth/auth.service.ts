import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthResponse, LoginRequest, RegisterRequest } from '../../../../models/auth';
import { CurrentUser } from '../../../../models/user';

@Injectable()
export class AuthService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.baseUrl}`;
  }

  register(body: RegisterRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/users`, body).pipe(pluck('user'));
  }

  login(body: LoginRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/users/login`, body).pipe(pluck('user'));
  }

  getCurrentUser(): Observable<CurrentUser> {
    return this.http.get<AuthResponse>(`${this.baseUrl}/user`).pipe(pluck('user'));
  }
}
