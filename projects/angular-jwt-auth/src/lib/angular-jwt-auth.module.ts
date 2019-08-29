import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login.component/login.component';
import { FormsModule } from '@angular/forms';
import { JwtAuthService } from './services/jwt-auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { JwtAuthConfig, JwtAuthConfigInjectionToken } from './config';
import { CommonModule } from '@angular/common';
import { JwtAuthGuard } from './services/jwt-auth-guard.service';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        LoginComponent
    ],
    providers: [
        CookieService,
        JwtAuthService,
        JwtAuthGuard
    ]
})
export class AngularJwtAuthModule {

    static forRoot(config: JwtAuthConfig): ModuleWithProviders {
        return {
            ngModule: AngularJwtAuthModule,
            providers: [
                {
                    provide: JwtAuthConfigInjectionToken,
                    useValue: config
                }
            ]
        };
    }

}
