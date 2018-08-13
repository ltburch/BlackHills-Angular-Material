export class BHUser {
  static FRAUD_CIS_PERSON_TYPE = 'F';
  static DECEASED_CIS_PERSON_TYPE = 'D';

  // person type values - we are using the same codeset as CIS (PersonWebServiceImpl) but could be anything
  static PRIMARY_PERSON_TYPE = 'P';
  static FINANCIAL_PERSON_TYPE = 'F';
  static CONTACT_PERSON_TYPE = 'C';

  // posid values - must be same as CIS
  static PASS_POSID_CODE = 'Y';
  static PENDING_POSID_CODE = 'P';
  // public static final  FAIL_POSID_CODE = 'N'; //null or other values are treated as fail
  static MAX_POSID_ATTEMPTS = 3; // on third attempt, we continue on
  static MAX_SSN_MATCH_ATTEMPTS = 3; // on third attempt, we continue on
  id: number;

  // PERSON_TYPE - mapped as discriminator
  personType: string;

  cisType: string;
  // ACCOUNT_ID - optional foreign key for additional, contacts

  personId: number;

  landlord: boolean;

  posId: string;
  posIdMessage: string;
  posIdAttemptCount: number;
  utilityDebt: number; // utility debt in same loe
  namePrefix: string;
  lastName: string; // made uppercase
  firstName: string; // made uppercase
  middleName: string; // made uppercase
  businessName: string; // made uppercase
  businessType: string;

  cisAccountNumbers: Array<number>;

  primaryPhoneNumber: string;
  secondaryPhoneNumber: string;
  birthDate: Date;
  ssn: string;
  ein: string;
  ssnMatchCount: number;

  relationshipType: string;
  email: string;
  // didn't see a definition for this
  // Address previousAddress;
}
