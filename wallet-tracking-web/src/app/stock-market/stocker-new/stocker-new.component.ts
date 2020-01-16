import {Component, OnInit} from '@angular/core';
import {StockMarketModel} from '../../models/stock-market.model';
import {StockMarketService} from '../services/stock-market.service';
import {FormBuilder, Validators} from '@angular/forms';

declare var require: any;

const data: any = require('../../dashboard/data.json');

@Component({
  selector: 'app-stocker-new',
  templateUrl: './stocker-new.component.html',
  styleUrls: ['./stocker-new.component.css']
})
export class StockerNewComponent implements OnInit {

  stockMarket: StockMarketModel;

  stockMarketGroup = this.formBuilder.group({
    codigoAcao: ['', [Validators.required]],
    quantidade: [null, [Validators.required]],
    preco: [null, [Validators.required]],
    dataCompra: [null, [Validators.required]],
  });

  constructor(
    private stockerMarketService: StockMarketService,
    private formBuilder: FormBuilder
  ) {
  }


  ngOnInit() {
  }


  // TODO criar componente da tela para poder recuperar os dados do formulário
  onSubmit(): void {
    this.stockerMarketService.create(this.stockMarket)
  }

}
