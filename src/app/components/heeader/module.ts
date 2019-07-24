import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from '@components/heeader/component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    IonicModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
