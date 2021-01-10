import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthResponse, RegisterRequest } from '../../../../models/auth';
import { CurrentUser } from '../../../../models/user';

@Injectable()
export class AuthService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.baseUrl}/users`;
  }

  register(body: RegisterRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(this.apiUrl, body).pipe(pluck('user'));
  }
}
