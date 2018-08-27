import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// import { AnalyticsService } from './analytics.service';


/**
 * Allows header content to be loaded in from separate modules by generating a factory with the correct
 * module content from which to dynamically instantiate the header.  See GlobalHeaderComponent.
 */
@Injectable()
export class AppService {

  // keep track of errors passed to die() method
  public fatalErrors: any[] = [];

  constructor(
    private router: Router,
  ) { }


  public die(error: any) {
    this.fatalErrors.push(error);

    const index = this.router.url.indexOf('?');
    const ref = index === -1 ? this.router.url : this.router.url.substr(0, index);
    if (ref !== '/error') {
      this.router.navigate(['/error'], { queryParams: { ref } });
    }
  }
}
