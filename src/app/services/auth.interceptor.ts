import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private user:UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
    const token = this.user.getToken();
        if (token != null) {
        req = req.clone({ setHeaders : {Authorization : `Bearer ${token}`}});
        }
        console.log('Request headers with Authorization:', req);
    return next.handle(req);
  }
}