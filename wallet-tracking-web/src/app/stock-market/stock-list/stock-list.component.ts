import {Component, OnInit} from '@angular/core';
import {StockMarketService} from '../services/stock-market.service';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'quantidade', 'preco', 'compra'];
  stockMarketDataSource$ = this.stockMarketService.findAll();

  constructor(
    private stockMarketService: StockMarketService
  ) {
  }

  ngOnInit() {
  }


}
