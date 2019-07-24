import { Component, OnInit } from '@angular/core';

import { GlobalService } from '@services/globals';
import { MemberService } from '@models/account/index';
import { Members } from '@models/account/member';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public loading = false;
  public hasNext = false;
  public results: Members = { data: [], hasNext: false };

  constructor(private memberService: MemberService, private globalService: GlobalService) {}

  ngOnInit() {
    this.loading = true;
    this.globalService.setTitle('List Page');

    this.memberService.getMembers().subscribe(response => {
      this.loading = false;

      if (response.data.length > 0) {
        this.results = response;
        this.hasNext = response.hasNext || false;
      }
    });
  }
}
