import {Routes} from '@angular/router';
import {StockerNewComponent} from './stocker-new/stocker-new.component';
import {StockListComponent} from './stock-list/stock-list.component';

export const StockMarketRouting: Routes = [
  {path: '', component: StockerNewComponent},
  {path: 'list', component: StockListComponent}
];
