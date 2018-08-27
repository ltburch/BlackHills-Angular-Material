import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../util/app.service';

@Component({
  selector: 'ml-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent implements OnInit {
  refPage: string;
  showErrors = true;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router) {}

  // use getter rather than setting in init so async errors can continue to
  // stream in after the page loads
  get fatalErrors(): string[] {
    return this.appService.fatalErrors
      .map(error => {
        if (error instanceof Error) {
          return error.stack;
        } else if (typeof error.toString === 'function') {
          return error.toString();
        }
        return null;
      })
      .filter(error => !!error);
  }

  ngOnInit() {
    // this.showErrors = environment.showErrors;
    this.refPage = this.route.snapshot.queryParams['ref'];
    if (this.router['navigationId'] <= 1 && this.refPage) {
      this.router.navigate(this.refPage.split('/'), {
        preserveQueryParams: false
      });
    }
  }
}
