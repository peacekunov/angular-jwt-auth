import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable, Inject } from "@angular/core";
import { JwtAuthService } from './jwt-auth.service';
import { JwtAuthConfigInjectionToken } from '../config';

@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor(@Inject(JwtAuthConfigInjectionToken) private config, private authService: JwtAuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuthorized()) {
            return true;
        } else {
            return this.router.navigate(this.config.loginNavigate);
        }
    }

}