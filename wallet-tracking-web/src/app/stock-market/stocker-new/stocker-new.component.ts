import {Component, OnInit} from '@angular/core';
import {StockMarketService} from '../services/stock-market.service';
import {FormBuilder, Validators} from '@angular/forms';
import {StockMarketModel} from '../../models/stock-market.model';

declare var require: any;

const data: any = require('../../dashboard/data.json');

@Component({
  selector: 'app-stocker-new',
  templateUrl: './stocker-new.component.html',
  styleUrls: ['./stocker-new.component.css'],
})
export class StockerNewComponent implements OnInit {

  stockMarketFormGroup = this.formBuilder.group({
    codigo: ['', [Validators.required]],
    quantidade: [null, [Validators.required]],
    preco: [null, [Validators.required]],
    compra: [null, [Validators.required]],
  });

  constructor(
    private stockerMarketService: StockMarketService,
    private formBuilder: FormBuilder
  ) {
  }


  ngOnInit() {
  }


  onSubmit(): void {
    const stockMarket = this.stockMarketFormGroup.value as StockMarketModel;
    stockMarket.preco = Number(stockMarket.preco);
    this.stockerMarketService.create(stockMarket)
      .subscribe((data) => console.log(data), error => console.error(error))
  }

}
