import { Component, OnInit } from '@angular/core';
import { toUnicode } from 'punycode';

@Component({
  selector: 'app-buttom-legend',
  templateUrl: './buttom-legend.component.html',
  styleUrls: ['./buttom-legend.component.scss']
})
export class ButtomLegendComponent implements OnInit {

  numbersSort: string[] = ["1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6","1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6","1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6","1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6","1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6","1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6","1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6","1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6","1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6","1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6","1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6", "1", "2", "3","4", "5", "6"];
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

  getNumber(el) {
    console.log(el); 
    this.numberChoose = el;
    this.listItem.push({
      value: el
    });
  
    console.log( this.listItem);

    this.popUpOn();
    
  }

  popUpOn() {
    this.modal = true;
  }

  onClose() {
    this.modal = false;
  }

  deletenumber(n) {
    this.numbersSort.splice(2, 1);
    console.log(n);
    
  }

}
