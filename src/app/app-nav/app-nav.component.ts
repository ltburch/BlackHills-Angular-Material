import {Component, OnInit, DoCheck} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDetailsService } from '../services/user-details.service';
import { NavbarService } from '../services/navbar.service';
import { MenuService } from '../services/navbar.service';
import { BHUser } from '../models/bh-user';
import { ViewChild } from '@angular/core';
import { AccountPremiseInfo } from '../models/account-premise-info';
import { Global } from '../util/global';
import { Logger } from '../util/logger.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements DoCheck, OnInit  {

  bhUser: BHUser = null;
  accountPremise: AccountPremiseInfo;

  public isSmallScreen;

  // isActionSpecified: boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );



  @ViewChild('drawer') drawer: any;
  toggleSideNav() {
    if (this.breakpointObserver.isMatched('(max-width: 959px)')) {
      this.drawer.toggle();
      } else {
        this.drawer.open();
      }
   }



  constructor(
    private breakpointObserver: BreakpointObserver,
    private userDetailsService: UserDetailsService,
    public nav: NavbarService,
    public menu: MenuService,
    private logger: Logger
  ) {

  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 960px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          // console.log('Viewport is 500px or over!');
          this.isSmallScreen = false;
        } else {
          // console.log('Viewport is getting smaller!');
          this.isSmallScreen = true;
        }
      });
  }

  ngDoCheck() {
    // this.logger.log('init nav');
    // a little hacky and wasteful but very light
    this.bhUser = Global.currentUser;
    this.accountPremise = Global.selectedAccountPremise;
  }

  }
