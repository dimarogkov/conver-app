import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyService } from '../services/currency.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    CurrencyService
  ]
})

export class SharedModule { }
