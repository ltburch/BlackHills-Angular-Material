import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Logger } from './logger.service';
import { AppService } from './app.service';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  private appService;
  constructor(
    private injector: Injector
  ) { }

  handleError(error: Error) {
    const logger = this.injector.get(Logger);
    const appService = this.injector.get(AppService);
    const type = typeof error;
    logger.log(error);
    // const se: ServerError = new ServerError(typeof error, error.message, error.stack);

    // // logger.error('UNCAUGHT ERROR', error);
    // this.errorReporterService.reportError(se).subscribe(this.onReportErrorSuccess.bind(this));
    appService.die(error);
  }

  onReportErrorSuccess() {
    // do nothing
  }

  onReportErrorFail() {
    try {
      const logger = this.injector.get(Logger);
      logger.error('Unable to log error');
    } catch (e) { }
  }
}

