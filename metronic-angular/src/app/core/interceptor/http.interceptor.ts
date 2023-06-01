import {Observable, of, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
// @ts-ignore
// import {toastTypes} from '../services';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor(private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
                  tap(evt => {}),
                  catchError((err: any) => {
                      if (err instanceof HttpErrorResponse) {
                          try {
                            if ( err.status === 401) {
                              // this.helper.common.showToast(toastTypes.error, 'Unauthorized', err.error.message);
                              localStorage.clear();
                              this.router.navigate(['/login']);
                            } else {
                              // this.helper.common.showToast(toastTypes.error, 'Server error');
                              // localStorage.clear();
                              // this.router.navigate(['/authentication/signin']);
                            }
                          } catch (e) {
                          }
                      }
                      return throwError(err);
                  }));
            }
}