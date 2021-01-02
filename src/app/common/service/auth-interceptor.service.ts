import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authToken:string=sessionStorage.getItem("auth-token");
    if (authToken) {
      // Logged in. Add Bearer token.
      return next.handle(
        req.clone({
          headers: req.headers.append('auth-token', authToken)
        })
      );
    }
    // Not logged in. Continue without modification.
    return next.handle(req);
  }
}
