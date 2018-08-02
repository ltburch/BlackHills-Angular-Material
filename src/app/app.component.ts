import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AnalyticsService } from './util/analytics.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuth = true;


  constructor(
    private auth: AuthService,
    private analyticsService: AnalyticsService
  ) {

  }

  ngOnInit() {
    this.analyticsService.sendEvent('one', 'two');

  }


}
