import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  form: FormGroup

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({});
  }

  // currentOne: new FormControl('', [Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),

}
