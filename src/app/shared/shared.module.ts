import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyService } from '../services/currency.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    CurrencyService
  ]
})

export class SharedModule { }
