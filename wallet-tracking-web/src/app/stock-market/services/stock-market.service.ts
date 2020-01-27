import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockMarketModel} from '../../models/stock-market.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockMarketService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  create(stockMarket: StockMarketModel): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/api/stockMarket`, stockMarket)
  }

  findAll(): Observable<StockMarketModel[]> {
    return this.httpClient.get(`${environment.baseUrl}/api/stockMarket`) as Observable<StockMarketModel[]>
  }
}
