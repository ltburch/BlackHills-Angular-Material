import { Observable, of } from 'rxjs';
import { plainToClass } from 'class-transformer';
import { BHUser } from '../models/bh-user';
import { delay } from 'rxjs/internal/operators';
import { Logger } from '../util/logger.service';

export class UserDetailsService {

  dummyValue = '{ \
    \"personId\": 1234567, \
    \"landlord\": false, \
    \"posId\": \"1\", \
    \"posIdMessage\": \"first\", \
    \"posIdAttemptCount\": 1, \
    \"utilityDebt\": 123.45, \
    \"namePrefix\": \"Mr\", \
    \"lastName\": \"Coyote\", \
    \"firstName\": \"Wile\", \
    \"middleName\": \"E\", \
    \"businessName\": \"Acme\", \
    \"businessType\": \"mail order retail\", \
    \"cisAccountNumbers\": [ \"82350\", \"2345678\", \"3456789\" ], \
    \"primaryPhoneNumber\": \"605-555-1212\", \
    \"secondaryPhoneNumber\": \"888-890-5554\", \
    \"birthDate\": \"11/22/33\", \
    \"ssn\": \"123-45-1234\", \
    \"ssnMatchCount\": 1, \
    \"relationshipType\": \"none\", \
    \"email\": \"wile.e.cyote@gmail.com\" \
}';
constructor() {

  }
  // the signature should likely remain the same as we go about getting a real service here
  // this is simply returning awhat is essentially a hard coded value at the moment
  // though the real version will be making a http call to our service layer (and actually will be asynchronous)
  getCurrentUser(): Observable<BHUser> {
    console.log(this.dummyValue);
    const rv = plainToClass(BHUser, JSON.parse(this.dummyValue) as BHUser);
    const orv: Observable<BHUser>  = of(rv);
    orv.pipe( delay(1000) );
    return orv;
  }
}
