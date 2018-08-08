import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDetailsService } from '../services/user-details.service';
import { UserDetails } from '../models/user-details';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent {

  userDetails: UserDetails = null;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(
    private breakpointObserver: BreakpointObserver,
    private userDetailsService: UserDetailsService
  ) {

    this.userDetailsService.getCurrentUser().subscribe(this.gotUserDetails.bind(this));
  }

  gotUserDetails(userDetails: UserDetails) {
    this.userDetails = userDetails;
  }



  }
