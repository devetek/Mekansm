import { Component, OnInit } from '@angular/core';

import { GlobalService } from '@services/globals';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    this.globalService.setTitle('Home Page');
  }


}
