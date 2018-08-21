import { Observable, of } from 'rxjs';
import { plainToClass } from 'class-transformer';
import { UserDetails } from '../models/user-details';
import { BHUser } from '../models/bh-user';
import { Logger } from '../util/logger.service';

export class UserDetailsService {
  dummyValue = '{ \
    \"userId\": \"ltburch\", \
    \"name": \"Lee Burch", \
    \"address\": \"2800 N Lake Shore Dr\", \
    \"city\":\"Chicago\", \
    \"state\":\"IL\", \
    \"zipCode\":\"60654\" \
  }';

  dummyValue2 = '{ \
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
    \"cisAccountNumbers\": [ 1234567, 2345678, 3456789 ], \
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
  getCurrentUser(): Observable<UserDetails> {
    console.log(this.dummyValue2);
    const rv = plainToClass(UserDetails, JSON.parse(this.dummyValue2) as BHUser);
    return of( rv ) ;
  }
}
