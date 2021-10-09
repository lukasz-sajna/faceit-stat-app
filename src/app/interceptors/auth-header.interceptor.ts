import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_KEY } from '../injection-tokens';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(@Inject(API_KEY) private apiKey: string) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.apiKey}`
      }
    });
    return next.handle(request);
  }
}
