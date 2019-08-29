import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { JwtAuthConfigInjectionToken } from '../config';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable()
export class JwtAuthService {

    constructor(@Inject(JwtAuthConfigInjectionToken) private config, private httpClient: HttpClient, private cookieService: CookieService) { }

    getToken(login: string, password: string): Observable<any> {
        let observable: Observable<any> = this.httpClient.post(this.config.apiUrl, { Login: login, Password: password }, { responseType: 'text' }).pipe(share());
        observable.subscribe(token => {
            if (token != null) {
                this.cookieService.set(this.config.tokenCookieName, token);
            }
        });
        return observable;
    }

    isAuthorized(): boolean {
        return this.cookieService.check(this.config.tokenCookieName);
    }

    getTokenFromCookie(): string {
        return this.cookieService.get(this.config.tokenCookieName);
    }

    removeToken() {
        this.cookieService.delete(this.config.tokenCookieName);
    }

}