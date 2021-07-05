import { Component, OnInit } from '@angular/core';
import { toUnicode } from 'punycode';

@Component({
  selector: 'app-buttom-legend',
  templateUrl: './buttom-legend.component.html',
  styleUrls: ['./buttom-legend.component.scss']
})
export class ButtomLegendComponent implements OnInit {
  numberChoose: number;
  listItem = [];
  modal: boolean;
  numbers = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 600 ; i++) {
      this.numbers.push(i);
    }
  }

  getNumber(el): void {
    this.numberChoose = el;
    this.listItem.push({
      value: el
    });
    console.log( this.listItem);
    this.popUpOn();
  }

  popUpOn(): void {
    this.modal = true;
  }

  onClose(): void {
    this.modal = false;
  }

  deletenumber(n): void {
    // this.numbersSort.splice(2, 1);
    console.log(n);
  }

}
