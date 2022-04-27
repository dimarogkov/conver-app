import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency.interface';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  url: string = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
  urlWithRate: string = 'https://api.fastforex.io/fetch-multi?from=UAH&to=UAH,USD,EUR&api_key=ef511f752b-01d28765ac-razb35';

  constructor(private http: HttpClient) {}

  getCurrency(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.url);
  }

  getCurrencyWithRate(): Observable<any> {
    return this.http.get<any>(this.urlWithRate);
  }

}
