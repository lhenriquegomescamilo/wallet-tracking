import {Routes} from '@angular/router';
import {StockerMarketMainComponent} from './stocker-market-main/stocker-market-main.component';
import {StockerMarketNewComponent} from './stocker-market-new/stocker-market-new.component';

export const StockerMarketRoutes: Routes = [
  {path: 'main', component: StockerMarketMainComponent},
  {path: 'new', component: StockerMarketNewComponent},
];
