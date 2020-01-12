import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockerNewComponent} from './stocker-new/stocker-new.component';
import {RouterModule} from '@angular/router';
import {StockMarketRouting} from './stock-market.routing';


@NgModule({
  declarations: [StockerNewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(StockMarketRouting)
  ]
})
export class StockMarketModule {
}
