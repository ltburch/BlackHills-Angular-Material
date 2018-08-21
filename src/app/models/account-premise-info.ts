import { Address } from './address';
import { Type } from 'class-transformer';

export class AccountPremiseInfo {
  returncode: number;

  messagecode: number;

  message: string;

  numberreturned: string;

  accountid: string;

  lastname: string;

  firstname: string;

  @Type(() => Address)
  premiseInfo: Array<Address>;
}


