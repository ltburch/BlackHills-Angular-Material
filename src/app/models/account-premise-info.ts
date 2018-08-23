import { Premise } from './premise';
import { Type } from 'class-transformer';

export class AccountPremiseInfo {
  returncode: number;

  messagecode: number;

  message: string;

  numberreturned: string;

  accountid: string;

  lastname: string;

  firstname: string;

  @Type(() => Premise)
  premiseInfo: Array<Premise>;
}


