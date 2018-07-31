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

  getCurrentUser(): Observable<UserDetails> {
    const rv = plainToClass(UserDetails, JSON.parse(this.dummyValue) as UserDetails);
    return of( rv ) ;
  }
}
