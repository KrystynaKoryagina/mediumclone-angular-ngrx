import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PersistenceService } from '../modules/common/services/persistence/persistence.service';

@Injectable()
export class HttpAPIInterceptor implements HttpInterceptor {
  constructor(private persistenceService: PersistenceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get('accessToken');

    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : '',
      },
    });

    return next.handle(request);
  }
}
