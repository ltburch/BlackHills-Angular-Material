import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logger } from '../util/logger.service';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    // private logger: Logger
  ) {

  }
  public get<T>(url: string): Observable<any> {
    if (environment.localJson === true) {
      return this.http.get<T>('/assets/data/' + url + '.json', { observe: 'response' });
    } else {
      return this.http.get( url );
    }
  }
}
