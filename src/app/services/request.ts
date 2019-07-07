import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * @author: Prakasa <prakasa@devetek.com>
 * @description: Abstraction for api call in angular, provide your specific params for each methods
 */

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(url, { params }).pipe(catchError(this.formatErrors));
  }

  put(url: string, body: object = {}): Observable<any> {
    return this.http
      .put(url, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  post(url: string, body: object = {}): Observable<any> {
    return this.http
      .post(url, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url).pipe(catchError(this.formatErrors));
  }
}
