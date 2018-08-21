import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDetailsService } from '../services/user-details.service';
import { NavbarService } from '../services/navbar.service';
import { BHUser } from '../models/bh-user';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent {

  bhUser: BHUser = null;
  public isSmallScreen;

  // isActionSpecified: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userDetailsService: UserDetailsService,
    public nav: NavbarService
  ) {

    this.userDetailsService.getCurrentUser().subscribe(this.gotUserDetails.bind(this));

  }



  gotUserDetails(bhUser: BHUser) {
    this.bhUser = bhUser;
  }

  }
