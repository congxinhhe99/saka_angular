import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpEvent,
    HttpErrorResponse,
    HttpStatusCode,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AuthLocalStorageEnum } from '../enums/local-storage.enum';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
      private router:Router,
      private authService: AuthService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        const token = localStorage.getItem(AuthLocalStorageEnum.AccessToken);
        let header:any = {
          'Access-Control-Allow-Origin': '*'
        }
        if (token) {
          header.Authorization = `Bearer ${token}`;
            request = request.clone({
                setHeaders: header,
            });
        }
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
              if (error.status === HttpStatusCode.Unauthorized) {
                return this.authService.refreshToken().pipe(
                  switchMap((res) => {
                    request = request.clone({
                      setHeaders: {
                        Authorization: `Bearer ${localStorage.getItem(AuthLocalStorageEnum.AccessToken)}`,
                        'Access-Control-Allow-Origin': '*'
                      }
                    });
                    return next.handle(request);
                  }),
                  catchError((err) => {
                    localStorage.removeItem(AuthLocalStorageEnum.AccessToken);
                    localStorage.removeItem(AuthLocalStorageEnum.RefreshToken);
                    this.router.navigateByUrl("/");
                    return throwError(err);
                  })
                );
              }
              return throwError(error);
            })
        );
    }
}
