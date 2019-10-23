import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { baseURI } from 'src/shared/application.config';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      apiPath: baseURI,
      signInRedirect: '/login',
      globalOptions: {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    });
  }
}
