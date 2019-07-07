import { Component, OnInit } from '@angular/core';

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

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.loading = true;

    this.memberService.getMembers().subscribe(response => {
      this.loading = false;

      if (response.data.length > 0) {
        this.results = response;
        this.hasNext = response.hasNext || false;
      }
    });
  }
}
