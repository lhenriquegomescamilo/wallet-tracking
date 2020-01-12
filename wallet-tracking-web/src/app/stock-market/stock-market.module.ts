import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockerNewComponent} from './stocker-new/stocker-new.component';
import {RouterModule} from '@angular/router';
import {StockMarketRouting} from './stock-market.routing';
import {DemoMaterialModule} from '../demo-material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {ChartistModule} from 'ng-chartist';


@NgModule({
  declarations: [StockerNewComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(StockMarketRouting)
  ]
})
export class StockMarketModule {
}
