import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtAuthService } from './jwt-auth.service';

@Injectable()
export class JwtBearerInterceptor implements HttpInterceptor {

    constructor(public authService: JwtAuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = (this.authService.isAuthorized()) ? request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getTokenFromCookie()}`
            }
        }) : request;
        return next.handle(request);
    }
}