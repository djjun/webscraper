import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    public getToken(): string {
        return JSON.parse(localStorage.getItem('bank-token'));
    }

    public setToken(token: string) {
        return localStorage.setItem('bank-token', token);
    }

    public removeToken() {
        return localStorage.removeItem('bank-token');
    }

    public isAuthenticated(): boolean {
        // get the token
        const token = this.getToken();
        // return a boolean reflecting 
        // whether or not the token is expired
        return !!token;
    }
}