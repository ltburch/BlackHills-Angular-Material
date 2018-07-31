import { Observable, of } from 'rxjs';
import { plainToClass } from 'class-transformer';
import { UserDetails } from '../models/user-details';

export class UserDetailsService {
  dummyValue = '{ \
    \"userId\": \"ltburch\", \
    \"name": \"Lee Burch", \
    \"address\": \"2800 N Lake Shore Dr\", \
    \"city\":\"Chicago\", \
    \"state\":\"IL\", \
    \"zipCode\":\"60654\" \
  }';

  // the signature should likely remain the same as we go about getting a real service here
  // this is simply returning awhat is essentially a hard coded value at the moment
  // though the real version will be making a http call to our service layer (and actually will be asynchronous)
  getCurrentUser(): Observable<UserDetails> {
    const rv = plainToClass(UserDetails, JSON.parse(this.dummyValue) as UserDetails);
    return of( rv ) ;
  }
}
