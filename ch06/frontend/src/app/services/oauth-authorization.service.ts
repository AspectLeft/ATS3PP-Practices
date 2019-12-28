import { Injectable } from '@angular/core';
import {Authorization} from './authorization';
import {Router} from '@angular/router';
import {Socket} from 'ngx-socket-io';
import * as auth0 from 'auth0-js';
import {Log} from '../types/Logging';

@Injectable({
  providedIn: 'root'
})
export class OauthAuthorizationService {
  auth0 = new auth0.WebAuth({
    clientID: 'qVjaCzP2joMNBjfwDoharTWRhe7lbbDL',
    domain: 'dev-in2zn49p.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid email'
  });

  private readonly authorization: Authorization;
  constructor(private router: Router, private socket: Socket) {
    this.authorization = new Authorization(socket);
  }

  @Log()
  public Login(): void {
    this.auth0.authorize();
  }

  @Log()
  public Logout(): void {
    this.authorization.Clear();
    this.auth0.logout({
      return_to: window.location.origin
    });
  }

  @Log()
  public CheckAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (!err) {
        this.authorization.SetFromAuthorizationResult(authResult);
        window.location.hash = '';
        this.router.navigate(['/secret']);
      } else {
        this.router.navigate(['/general']);
        console.log(err);
      }
    });
  }

  @Log()
  public Renew(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.authorization.SetFromAuthorizationResult(authResult);
      } else if (err) {
        this.Logout();
      }
    });
  }
  public get IsAuthenticated(): boolean { return this.authorization.IsAuthenticated; }
}
