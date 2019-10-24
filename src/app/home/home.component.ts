import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

import { Router } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService, private routerRoute: Router) { }

  ngOnInit() {
    if (this._tokenService.currentAuthData != null) {
      this.routerRoute.navigate(['/forms'])
    }
  }

}
