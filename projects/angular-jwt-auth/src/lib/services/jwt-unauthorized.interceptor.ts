import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { JwtAuthService } from './jwt-auth.service';
import { JwtAuthConfigInjectionToken } from '../config';

@Injectable()
export class JwtUnauthorizedInterceptor implements HttpInterceptor {

    constructor(@Inject(JwtAuthConfigInjectionToken) private config, private authService: JwtAuthService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    this.authService.removeToken();
                    this.router.navigate(this.config.loginNavigate);
                }
            }
        }));
    }
}
