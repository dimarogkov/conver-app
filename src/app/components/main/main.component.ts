import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  amountOne: number = 1
  amountTwo: number = 1
  selectCurrencyValue1: number = 1
  selectCurrencyValue2: number = 1

  currencyArr: any = [];
  arr: any = [];

  constructor(private currencyServices: CurrencyService) {
    this.currencyServices.getCurrencyWithRate().subscribe(item => {
      this.arr = Object.entries(item.results);

      this.selectCurrencyValue1 = this.arr[0][1];
      this.selectCurrencyValue2 = this.arr[0][1];

      this.arr.forEach((el: any)=> {
        const obj = {
          current_name: el[0],
          current_rate: el[1]
        }
        this.currencyArr.push(obj);
      });
    });
  }

  ngOnInit(): void {}

  get_iOneValue() {
    this.amountTwo = +(this.amountOne * this.selectCurrencyValue2 / this.selectCurrencyValue1).toFixed(2);
  }

  get_iTwoValue() {
    this.amountOne = +(this.amountTwo * this.selectCurrencyValue1 / this.selectCurrencyValue2).toFixed(2);
  }

  get_sOneValue(event: any) {
    this.selectCurrencyValue1 = event.target.value;
    this.amountTwo = +(+this.amountOne * +this.selectCurrencyValue2 / +this.selectCurrencyValue1).toFixed(2);
  }

  get_sTwoValue(event: any) {
    this.selectCurrencyValue2 = event.target.value;
    this.amountOne = +(+this.amountTwo * +this.selectCurrencyValue1 / +this.selectCurrencyValue2).toFixed(2);
  }

}
