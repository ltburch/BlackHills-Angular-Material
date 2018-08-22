import { BHUser } from '../models/bh-user';
import { AccountInfo } from '../models/account-info';

export class Global {
  public static currentUser: BHUser;
  public static selectedAccount: AccountInfo;
}
