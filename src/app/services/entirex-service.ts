import { Observable, of } from 'rxjs';
import { plainToClass } from 'class-transformer';
import { AccountInfo } from '../models/account-info';
import { Address } from '../models/address';
import { AccountPremiseInfo } from '../models/account-premise-info';

export class EntireXService {
  dummyAccountInfo = '{ \
    \"returnCode\": 0, \
    \"messageCode\": 0, \
    \"message\": \"Successful response\", \
    \"custId\": \"468143\", \
    \"utilsAcnt\": 2, \
    \"nutsAcnt\": 0, \
    \"depOnHand\": 0.00, \
    \"totalAmtDue\": 129.48, \
    \"utilAmtDue\": 129.48, \
    \"nutAmtD\": 0.00, \
    \"currAmtDue\": 129.48, \
    \"utilCamTd\": 129.48, \
    \"nutCamTd\": 0.00, \
    \"utilArs030\": 129.48, \
    \"utilArs3160\": 0.00, \
    \"utilArs6190\": 0.00, \
    \"utilArs91UP\": 0.00, \
    \"nutArs030\": 0.00, \
    \"nutArs3160\": 0.00, \
    \"nutArs6190\": 0.00, \
    \"nutArs91UP\": 0.00, \
    \"writeOff\": 0.00, \
    \"utilWriteOff\": 0.00, \
    \"nutWriteOff\": 0.00, \
    \"enfInd\": \"E\", \
    \"premiseCnt\": 1, \
    \"billCycle\": \"10\", \
    \"daysTillDue\": 20, \
    \"totalBudgetAmt\": 0.00, \
    \"ruleId\": \"4529371376\", \
    \"legalOperEntity\": \"CLFP\", \
    \"startDt\": \"0\", \
    \"stopDt\": \"0\", \
    \"sendToBank\": \"0\", \
    \"postDt\": \"0\", \
    \"amount\": 0.00, \
    \"oneTimeInd\": \"Y\", \
    \"eBillStatus\": \"N\" \
  }';

  dummyPremiseInfo = ' { \
    "returnCode" : 0, \
    "messageCode" : 0, \
    "numberReturned" : 1, \
    "accountId" : "0000082350", \
    "lastName" : \"HERDER\", \
    "firstName" : \"DELORES\", \
    "premiseInfo" : [ { \
      \"address1\" : \"DELORES HERDER\", \
      \"address2\" : \"741 SPRINGFIELD TERRACE\", \
      \"address3\" : \"CHEYENNE WY 82007 3521\" \
    }] \
  }';


  public getAccountInfo(accountId: number): Observable<AccountInfo> {
    const rv = plainToClass(AccountInfo, JSON.parse(this.dummyAccountInfo) as AccountInfo);
    return of( rv ) ;

  }

  public getAccountPremiseInfo(accountId: number): Observable<AccountPremiseInfo> {
    const rv = plainToClass(AccountPremiseInfo, JSON.parse(this.dummyPremiseInfo) as AccountPremiseInfo);
    return of( rv ) ;

  }

}
