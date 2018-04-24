import 'rxjs/add/operator/share';

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpHeaderResponse } from '@angular/common/http';

import { AuthService } from '../services/auth.service';
import { Api } from './api.provider';

@Injectable()
export class User {
  _user: any;

  constructor(
    public api: Api,
    private auth: AuthService
  ) { }

  login(accountInfo: any) {    

    let seq = this.api.post('auth/login', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (!!res.response) {
        this._loggedIn(res.response);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  getUser() {
    let accountInfo:any = this.auth.getToken();
    let seq:any = this.api.get(`user/get-all?token=${accountInfo.access_token}&url=${accountInfo.url}`).share();

    seq.subscribe((res: any) => {
      if (!!res.data && !!res.data.error) {
        this.logout();
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  _loggedIn( res ) {
    let data: any = {
      access_token : res.access_token,
      refresh_token : res.refresh_token,
      url : res._links.account_simple.href
    }
    this.auth.setToken(JSON.stringify(data));
  }

  logout() {
    this.auth.removeToken();
  }
}
