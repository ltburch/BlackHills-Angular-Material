import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { BHUser } from '../models/bh-user';
import { Observable, of } from 'rxjs';
import { UserDetailsService } from '../services/user-details.service';
import { Logger } from './logger.service';
import { Global } from '../util/global';

@Injectable()
export class BHUserResolve implements Resolve<BHUser> {
  constructor(
    private userDetailService: UserDetailsService,
    private logger: Logger
  ) { }
  public resolve(route: ActivatedRouteSnapshot): Observable<BHUser> {
    this.logger.log('in resolve');
    const bhuo: Observable<BHUser> = this.userDetailService.getCurrentUser();
    bhuo.subscribe((user: BHUser) => {
      Global.currentUser = user;
    });

    return bhuo;

  }

}
