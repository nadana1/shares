import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { UserComponent } from './user.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { UserRoutingModule } from './user-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
  imports: [
    UserRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  
})
export class UserModule {
}
