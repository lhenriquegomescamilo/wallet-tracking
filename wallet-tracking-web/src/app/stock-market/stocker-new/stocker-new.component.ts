import {Component, OnInit} from '@angular/core';
import {Chart} from '../../dashboard/dashboard.component';
import {StockMarketModel} from '../../models/stock-market.model';
import {StockMarketService} from '../services/stock-market.service';

declare var require: any;

const data: any = require('../../dashboard/data.json');

@Component({
  selector: 'app-stocker-new',
  templateUrl: './stocker-new.component.html',
  styleUrls: ['./stocker-new.component.css']
})
export class StockerNewComponent implements OnInit {

  stockMarket: StockMarketModel

  constructor(
    private stockerMarketService: StockMarketService
  ) {
  }

  ngOnInit() {
  }
  // TODO criar componente da tela para poder recuperar os dados do formulário
  onSubmit(): void {
    this.stockerMarketService.create(this.stockMarket)
  }

}
