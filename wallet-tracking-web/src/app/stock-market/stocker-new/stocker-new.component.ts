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

  barChart1: Chart = {
    type: 'Bar',
    data: data['Bar'],
    options: {
      seriesBarDistance: 15,
      high: 12,

      axisX: {
        showGrid: false,
        offset: 20
      },
      axisY: {
        showGrid: true,
        offset: 40
      },
      height: 360
    },

    responsiveOptions: [
      [
        'screen and (min-width: 640px)',
        {
          axisX: {
            labelInterpolationFnc: function(
              value: number,
              index: number
            ): string {
              return index % 1 === 0 ? `${value}` : null;
            }
          }
        }
      ]
    ]
  };

  // This is for the donute chart
  donuteChart1: Chart = {
    type: 'Pie',
    data: data['Pie'],
    options: {
      donut: true,
      height: 260,
      showLabel: false,
      donutWidth: 20
    }
  };

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
