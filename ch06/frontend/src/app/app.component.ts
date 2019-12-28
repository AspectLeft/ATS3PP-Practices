import {Component, OnInit} from '@angular/core';
import {OauthAuthorizationService} from './services/oauth-authorization.service';

@Component({
  selector: 'atsp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(private auth: OauthAuthorizationService) {
    this.auth.CheckAuthentication();
  }

  ngOnInit(): void {
    if (this.auth.IsAuthenticated) {
      this.auth.Renew();
    }
  }

}
