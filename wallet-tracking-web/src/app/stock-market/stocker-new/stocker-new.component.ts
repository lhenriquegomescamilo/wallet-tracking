import {Component, OnDestroy, OnInit} from '@angular/core';
import {StockMarketService} from '../services/stock-market.service';
import {FormBuilder, Validators} from '@angular/forms';
import {StockMarketModel} from '../../models/stock-market.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Subscription} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

declare var require: any;

const data: any = require('../../dashboard/data.json');

@Component({
  selector: 'app-stocker-new',
  templateUrl: './stocker-new.component.html',
  styleUrls: ['./stocker-new.component.css'],
})
export class StockerNewComponent implements OnInit, OnDestroy {

  isShow = false;
  isNotBlockSubmit = false;

  stockMarketFormGroup = this.formBuilder.group({
    codigo: ['', [Validators.required]],
    quantidade: [null, [Validators.required]],
    preco: [null, [Validators.required]],
    compra: [null, [Validators.required]],
  });

  private stockerMarketServiceSubscription: Subscription;

  constructor(
    private stockerMarketService: StockMarketService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
  }


  ngOnInit() {
    this.stockMarketFormGroup.valueChanges.subscribe(() => {
        this.isNotBlockSubmit = this.stockMarketFormGroup.valid
    })
  }


  onSubmit(): void {
    this.isShow = true;
    this.isNotBlockSubmit = false;
    const stockMarket = this.stockMarketFormGroup.value as StockMarketModel;
    stockMarket.preco = Number(stockMarket.preco);
    this.stockerMarketServiceSubscription = this.stockerMarketService.create(stockMarket)
      .pipe(distinctUntilChanged())
      .subscribe(
        _ => this.onSucess(),
        error => {
          this.onError(error)
        })
  }

  private onSucess() {
    this.isShow = false;
    this._snackBar.open('Ação criado com sucesso', 'Fechar', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      duration: 2500
    })
    ;
    this.stockMarketFormGroup.reset();
  }

  ngOnDestroy(): void {
    if (this.stockerMarketServiceSubscription) this.stockerMarketServiceSubscription.unsubscribe()
  }

  private onError(error: any) {
    this.isNotBlockSubmit = true;
    this.isShow = false;
    this._snackBar.open('Erro interno!', 'Fechar', {
      duration: 2500, verticalPosition: 'top',
      horizontalPosition: 'end',
    });
    console.error(error);
  }
}
