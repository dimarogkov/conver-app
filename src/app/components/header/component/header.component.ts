import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency.interface';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  currencyArr: Currency[] = [];
  arr: any = []

  constructor(private currencyServices: CurrencyService) {
    this.currencyServices.getCurrency().subscribe(item => {
      item.forEach(el => this.arr.push(el));
      this.arr.pop();

      // add name of icons
      const newArr = this.arr.map((v : any) => {
        return v.ccy === 'USD' ? {...v, icon_name: 'attach_money'} : {...v, icon_name: 'euro_symbol'};
      });

      newArr.forEach((el: any) => this.currencyArr.push(el));
    });
  }

  ngOnInit(): void {}

}
