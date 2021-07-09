import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-client',
  templateUrl: './data-client.component.html',
  styleUrls: ['./data-client.component.scss']
})
export class DataClientComponent implements OnInit {

  numberChoose: number;

  listNumbers = [];

  constructor() { }

  ngOnInit(): void {
  }

  add(e: any): void {
    this.listNumbers.push(e);
    console.log(this.listNumbers);
  }

  remove(e: any): void {
    console.log(e);
  }

}
