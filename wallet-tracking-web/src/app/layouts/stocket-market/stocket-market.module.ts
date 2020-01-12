import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {StockerMarketRoutes} from './stocket-market.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {ToastrModule} from 'ngx-toastr';
import { StockerMarketMainComponent } from './stocker-market-main/stocker-market-main.component';
import { StockerMarketNewComponent } from './stocker-market-new/stocker-market-new.component';

@NgModule({
  declarations: [StockerMarketMainComponent, StockerMarketNewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(StockerMarketRoutes),
    ReactiveFormsModule,
    ChartsModule,
    ToastrModule.forRoot()

  ]
})
export class StocketMarketModule {
}
