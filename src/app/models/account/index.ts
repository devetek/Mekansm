import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { api } from '@config/index';
import { RequestService } from '@services/request';
import { Members, Member } from '@models/account/member';

@Injectable()
export class MemberService {
  private HOST = api.dummyAPI;

  constructor(private requestService: RequestService, private http: HttpClient) {}

  /**
   * @description: Get all data members
   */
  getMembers(): Observable<Members> {
    return this.requestService
      .get(`${this.HOST}/bins/a1d26`)
      .pipe(map(data => data));
  }

  /**
   * @param: {string} id - Member id
   * @description: Get member by specific id
   */
  getMemberById(id: string): Observable<Member> {
    const options = id
      ? new HttpParams({ fromObject: { id } })
      : new HttpParams();

    return this.requestService
      .get(`${this.HOST}/bins/a1d27`, options)
      .pipe(map(data => data));
  }
}
