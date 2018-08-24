import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable} from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { NavbarService } from '../services/navbar.service';
import { MenuService } from '../services/navbar.service';
import { EntireXService } from '../services/entirex-service';
import { AccountInfo } from '../models/account-info';
import { AccountPremiseInfo } from '../models/account-premise-info';
import { Logger } from '../util/logger.service';
import { BHUserResolve } from '../util/user-resolve';
import { BHUser } from '../models/bh-user';
import { Global } from '../util/global';
import { forkJoin } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-account-selector',
  templateUrl: './account-selector.component.html',
  styleUrls: ['./account-selector.component.scss']
})
export class AccountSelectorComponent implements OnInit, DoCheck {
  searchControl = new FormControl();
  filteredOptions: Observable<string[]>;
  showAutocomplete = false;
  user: BHUser;
  sortedAccounts: Array<string>;
  accountInfoMap: Map<string, AccountInfo> = new Map<string, AccountInfo>();
  accountPremiseInfoMap: Map<string, AccountPremiseInfo> = new Map<string, AccountPremiseInfo>();
  filteredPremiseInfoMap: Map<string, AccountPremiseInfo>;
  accountPremise: AccountPremiseInfo;

  constructor(
    private logger: Logger,
    public secondaryNav: NavbarService,
    public menu: MenuService,
    private userResolve: BHUserResolve,
    private router: Router,
    private route: ActivatedRoute,
    private entireXService: EntireXService ) {

   }

  ngOnInit() {

    setTimeout(() => {
      // this.secondaryNav.show(); //show secondary navigation on this page.
      // this.menu.hide(); //hide hamburger menu in this page if there is no account selected.
    });

    // this.filteredOptions = this.searchControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => this._filter(value))
    //   );

      const accountInfos: Array<Observable<AccountInfo>> = new Array<Observable<AccountInfo>>();

      Global.currentUser.cisAccountNumbers.forEach(acct => {
        accountInfos.push(this.entireXService.getAccountInfo(acct));
      });
      forkJoin(accountInfos).subscribe(this.gotAccountInfo.bind(this));

      const accountPremiseInfos: Array<Observable<AccountPremiseInfo>> = new Array<Observable<AccountPremiseInfo>>();

      Global.currentUser.cisAccountNumbers.forEach(acct => {
        accountPremiseInfos.push(this.entireXService.getAccountPremiseInfo(acct));
      });

      forkJoin(accountPremiseInfos).subscribe(this.gotAccountPremiseInfo.bind(this));
      // console.log(accountPremiseInfos);
      // this.entireXService.getAccountInfo('12345').subscribe(this.gotAccountInfo.bind(this));
      // this.entireXService.getAccountPremiseInfo('12345').subscribe(this.gotAccountPremiseInfo.bind(this));

      // the user resolver will have set the global user before this ever gets invoked to avoid
      // the need to make a async call here (there is no point in even trying to display before the user has resolved)
      this.logger.log('Global user ' + Global.currentUser.firstName);
      // this.logger.log('Global Account ' + Global.currentAccount);
      this.user = Global.currentUser;
  }

   private gotAccountInfo(accountInfos: Array<AccountInfo>) {
    accountInfos.forEach((acct, idx) => {
      this.accountInfoMap.set(Global.currentUser.cisAccountNumbers[idx], acct);
    });
  }

  private gotAccountPremiseInfo(accountPremiseInfos: Array<AccountPremiseInfo>) {
    accountPremiseInfos.forEach((acct, idx) => {
      this.accountPremiseInfoMap.set(Global.currentUser.cisAccountNumbers[idx], acct);
    });
    this.filteredPremiseInfoMap = this.accountPremiseInfoMap;
    this.setSortedAccounts();
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //
  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

  public accountSelected(accountId: string) {
    this.logger.log('account selected: ' + accountId);
    Global.selectedAccount = this.accountInfoMap.get(accountId);
    Global.selectedAccountPremise = this.accountPremiseInfoMap.get(accountId);
    this.router.navigate([ '/dashboard' ]);
  }



  setSortedAccounts() {
    this.sortedAccounts = Array.from(this.filteredPremiseInfoMap.keys());
    this.sortedAccounts.sort((id1, id2) => {
      return (this.accountInfoMap.get(id2).daysTillDue - this.accountInfoMap.get(id1).daysTillDue);

    });
    this.logger.log(this.sortedAccounts);
  }

  keyUp(filterString: string) {
    // reassigning is kind of a hint to angular change detection
    this.filteredPremiseInfoMap = new Map<string, AccountPremiseInfo>();

    // this filter may add the same premise info twice, but under the same key so no harm
    // the number of situations underwhich that should happen is very low
    this.accountPremiseInfoMap.forEach((val, key) => {
      val.premiseInfo.forEach(premiseInfo => {
        if (premiseInfo.address2.indexOf(filterString.toUpperCase()) !== -1) {
          this.filteredPremiseInfoMap.set(key, val);
        }
      });
    });
    this.setSortedAccounts();

  }

  public getKeys(myMap) {
    return Array.from(myMap.keys());
  }
  ngDoCheck() {
    this.accountPremise = Global.selectedAccountPremise;
  }



}
