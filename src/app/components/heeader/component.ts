import { Component } from '@angular/core';

import { GlobalService } from '@services/globals';

@Component({
  selector: 'layout-header',
  templateUrl: './view.html',
})
export class HeaderComponent {
  constructor(private global: GlobalService) {}
}
