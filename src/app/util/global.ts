import { BHUser } from '../models/bh-user';
import { AccountInfo } from '../models/account-info';
import { AccountPremiseInfo } from '../models/account-premise-info';

export class Global {
  public static currentUser: BHUser;
  public static selectedAccount: AccountInfo;
  public static selectedAccountPremise: AccountPremiseInfo;
}
