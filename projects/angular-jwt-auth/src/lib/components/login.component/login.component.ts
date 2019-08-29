import { Component, OnInit, Inject } from '@angular/core';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { Router } from '@angular/router';
import { JwtAuthConfigInjectionToken } from '../../config';

@Component({
    selector: 'jwt-auth-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    
    login: string;
    password: string;
    error: boolean;

    constructor(@Inject(JwtAuthConfigInjectionToken) private config, private authService: JwtAuthService, private router: Router) { }

    ngOnInit(): void {
        if (this.authService.isAuthorized()) {
            this.router.navigate(this.config.successLoginNavigate);
        }
    }

    loginRequest() {   
        this.authService.getToken(this.login, this.password)
            .subscribe(token => {
                if (token != null) {
                    this.router.navigate(this.config.successLoginNavigate);
                } else {
                    this.error = true;
                }
            });
    }

}