import { Observable, of } from 'rxjs';
import { plainToClass } from 'class-transformer';
import { AccountInfo } from '../models/account-info';
import { AccountPremiseInfo } from '../models/account-premise-info';
import { delay } from 'rxjs/internal/operators';
import { EntireXDummyData } from '../dummydata/entirex';
import { Logger } from '../util/logger.service';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class EntireXService {
  constructor (
    private apiService: ApiService,
    private logger: Logger,
    private http: HttpClient
  ) { }

  public getAccountInfo(accountId: string): Observable<AccountInfo> {
    return this.apiService.get<AccountInfo>('/entirex/accountinfo/' + accountId).pipe(map(data => {
      // this.logger.log(data.body);
      const rv = plainToClass(AccountInfo, data.body as AccountInfo);
      return rv;
    }));

    // const rv = plainToClass(AccountInfo, JSON.parse(EntireXDummyData.dummyAccountInfoMap.get(accountId) ) as AccountInfo);
    // return of( rv ).pipe( delay(1000) ) ;

  }

  public getAccountPremiseInfo(accountId: string): Observable<AccountPremiseInfo> {
    return this.apiService.get<AccountPremiseInfo>('/entirex/premiseinfo/' + accountId).pipe(map(data => {
      // this.logger.log(data.body);
      const rv = plainToClass(AccountPremiseInfo, data.body as AccountPremiseInfo);
      return rv;
    }));

  }

}
