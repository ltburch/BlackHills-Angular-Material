import { Injectable } from '@angular/core';

import { Logger } from './logger.service';

/**
 * Wrapper for Google Tag Manager window.dataLayer methods
 */
@Injectable()
export class AnalyticsService {
  private currentDimensions: any = {};

  constructor(private logger: Logger) {}

  /**
   * Push data to the GTM dataLayer if it is defined
   */
  public pushToDataLayer(data: any) {
    if (typeof window['dataLayer'] === 'undefined') {
      window['dataLayer'] = new Array();
    }
    const dataLayer = window['dataLayer'];
    // don't truncate just push more in, the google listener can handle their being stuff in there
    // already
    dataLayer.push(data);
  }

  public sendEventEx(
    category: string,
    action: string,
    data: Map<string, string>
  ) {
    const pushData: any = {
      event: 'ga_event',
      ec: category,
      ea: action
    };

    data.forEach((value, key) => {
      pushData[key] = value;
    });

    this.logger.log('pushData-->' + pushData);

    this.pushToDataLayer(pushData);
    // I am not sure this filtering on custom dimensions is needed, can't we count on the client code to send
    // what is needed and thee tool can handle nulls oin the reporting side?
    this.logger.info('GTM Event: ', pushData);
  }

  /**
   * Send a GTM event tag, this covers the majority of events, but a few have some additional data
   * covered by the alternate sendEvent
   *
   * Looking theough the metrics document it isn't clear we would ever use the "value", when additional
   * info is needed we have to pass it as a map
   */
  public sendEvent(
    category: string,
    action: string,
    label?: string,
    value?: string
  ) {
    const customExtension = new Map<string, string>();
    if (typeof value === 'undefined') {
      customExtension.set('el', label);
    } else if (typeof label !== 'undefined' && typeof value !== 'undefined') {
      customExtension.set(label, value);
    }

    this.sendEventEx(category, action, customExtension);
  }

  /**
   * Sets custom dimensions to be associated with all subsequent events
   */
  public setCustomDimensions(dimensions: any) {
    const data: any = {};

    Object.keys(dimensions).forEach(key => {
      const value = dimensions[key];
      const name = `cd_${key}`;
      data[name] = value;

      // track current set of dimensions internally for logging
      if (value == null) {
        delete this.currentDimensions[name];
      } else {
        this.currentDimensions[name] = value;
      }
    });

    this.pushToDataLayer(data);
    this.logger.info('GTM Set Dimensions: ', data);
  }
}
