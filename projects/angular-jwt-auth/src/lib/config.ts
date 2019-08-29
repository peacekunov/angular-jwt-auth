import { InjectionToken } from '@angular/core';

export interface JwtAuthConfig {
    apiUrl: string;
    tokenCookieName: string;
    loginNavigate: any[];
    successLoginNavigate: any[];
}

export const JwtAuthConfigInjectionToken = new InjectionToken<JwtAuthConfig>("JwtAuthConfig");