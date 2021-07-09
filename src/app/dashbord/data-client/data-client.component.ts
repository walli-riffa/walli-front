import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-client',
  templateUrl: './data-client.component.html',
  styleUrls: ['./data-client.component.scss']
})
export class DataClientComponent implements OnInit {

  numberChoose: any;

  numbers = [];
  listItem = [];
  numbersContract = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.numbers.push(i);
    }
  }

  getNumber(el, index): void {
    if (this.listItem.find((l) => l === el)) {
      this.listItem.splice(index, el);
      console.log(this.listItem);
    } else {
      this.listItem.push(el);
      console.log(this.listItem);
    }
  }

  findColors(num: number): boolean {
    return this.listItem.find( (n) => n === num);
  }

  add(e: any): void {
    console.log(e);
    this.numbersContract = e;
  }

  remove(e: any): void {
    console.log(e);
  }

}
