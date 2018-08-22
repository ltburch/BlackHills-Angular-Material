import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { NavbarService } from '../services/navbar.service';
import { MenuService } from '../services/navbar.service';
import { EntireXService } from '../services/entirex-service';
import { AccountInfo } from '../models/account-info';
import { AccountPremiseInfo } from '../models/account-premise-info';
import { Logger } from '../util/logger.service';
import { BHUserResolve } from '../util/user-resolve';
import { BHUser } from '../models/bh-user';
import { Global } from '../util/global';

@Component({
  selector: 'app-account-selector',
  templateUrl: './account-selector.component.html',
  styleUrls: ['./account-selector.component.scss']
})
export class AccountSelectorComponent implements OnInit {
  searchControl = new FormControl();
  options: string[] = ['1397 Timothy Ridge Dr.', '21353467', '24524 Florent Ave', '1105 Central Parkway'];
  filteredOptions: Observable<string[]>;
  showAutocomplete = false;
  accountInfo: AccountInfo = null;
  accountPremiseInfo: AccountPremiseInfo = null;


  constructor(
    private logger: Logger,
    public secondaryNav: NavbarService,
    public menu: MenuService,
    private userResolve: BHUserResolve,
    private route: ActivatedRoute,
    private entireXService: EntireXService ) {

   }

  ngOnInit() {

    setTimeout(() => {
      //this.secondaryNav.show(); //show secondary navigation on this page.
      this.menu.hide(); //hide hamburger menu in this page.
    });

    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );


      this.entireXService.getAccountInfo('12345').subscribe(this.gotAccountInfo.bind(this));
      this.entireXService.getAccountPremiseInfo('12345').subscribe(this.gotAccountPremiseInfo.bind(this));

      // this.route.data.subscribe((data: { user: BHUser }) => {
      //   this.logger.log('route data subscribe ' + data.user);
      // });
      this.logger.log('Global user ' + Global.currentUser.firstName);
      //this.logger.log('Global Account ' + Global.currentAccount);
  }

   private gotAccountInfo(accountInfo: AccountInfo) {
    this.accountInfo = accountInfo;

  }


   public gotAccountPremiseInfo(accountPremiseInfo: AccountPremiseInfo) {
    this.accountPremiseInfo = accountPremiseInfo;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  // show options dropdown on input.
  updatedVal(e) {
    if (e && e.length >= 1) {
       this.showAutocomplete = true;
    } else {
       this.showAutocomplete = false;
    }
  }



}
