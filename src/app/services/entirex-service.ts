import { Observable, of } from 'rxjs';
import { plainToClass } from 'class-transformer';
import { AccountInfo } from '../models/account-info';
import { AccountPremiseInfo } from '../models/account-premise-info';
import { delay } from 'rxjs/internal/operators';
import { EntireXDummyData } from '../dummydata/entirex';
import { Logger } from '../util/logger.service';

export class EntireXService {
  constructor (

  ) { }

  public getAccountInfo(accountId: string): Observable<AccountInfo> {
    const rv = plainToClass(AccountInfo, JSON.parse(EntireXDummyData.dummyAccountInfoMap.get(accountId) ) as AccountInfo);
    return of( rv ).pipe( delay(1000) ) ;

  }

  public getAccountPremiseInfo(accountId: string): Observable<AccountPremiseInfo> {
    const rv = plainToClass(AccountPremiseInfo, JSON.parse(EntireXDummyData.dummyPremiseInfoMap.get(accountId)) as AccountPremiseInfo);
    return of( rv ).pipe( delay(1000) );

  }

}
