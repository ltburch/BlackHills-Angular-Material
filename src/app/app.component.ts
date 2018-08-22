import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AnalyticsService } from './util/analytics.service';
import { Logger } from './util/logger.service';
import { BHUserResolve } from './util/user-resolve';

import { Validators } from '@angular/forms';
import { BHUser } from './models/bh-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuth = true;

  // isSecondaryNav = true;


  constructor(
    private auth: AuthService,
    private analyticsService: AnalyticsService,
    private logger: Logger,
    private userResolve: BHUserResolve,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.analyticsService.sendEvent('one', 'two');

  }


}
