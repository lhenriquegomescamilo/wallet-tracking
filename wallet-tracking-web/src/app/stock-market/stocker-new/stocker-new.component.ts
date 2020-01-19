import {Component, OnInit} from '@angular/core';
import {StockMarketService} from '../services/stock-market.service';
import {FormBuilder, Validators} from '@angular/forms';
import {StockMarketModel} from '../../models/stock-market.model';
import {MatSnackBar} from '@angular/material/snack-bar';

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
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
  }


  ngOnInit() {
  }


  onSubmit(): void {
    const stockMarket = this.stockMarketFormGroup.value as StockMarketModel;
    stockMarket.preco = Number(stockMarket.preco);
    this.stockerMarketService.create(stockMarket)
      .subscribe(_ => this.onSucess(), error => console.error(error))
  }

  private onSucess() {
    this._snackBar.open('Ação criado com sucesso', 'Fechar', {duration: 2500});
    this.stockMarketFormGroup.reset();
  }
}
