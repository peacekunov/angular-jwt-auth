import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularJwtAuthModule } from 'projects/angular-jwt-auth/src/public-api';
import { JwtAuthConfig } from 'projects/angular-jwt-auth/src/lib/config';

const jwtAuthConfig: JwtAuthConfig = {
    apiUrl: "https://localhost:44390/api/admin/Auth",
    tokenCookieName: "test_access_token",
    loginNavigate: ["./Login"],
    successLoginNavigate: ["./Home"]
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularJwtAuthModule.forRoot(jwtAuthConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
