import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MemberService } from '@models/account/index';
import { HeaderComponent } from '@components/heeader/component';
import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      },
      {
        path: 'filter/:id',
        component: ListPage
      }
    ])
  ],
  declarations: [HeaderComponent, ListPage],
  providers: [MemberService],
})
export class ListPageModule {}
