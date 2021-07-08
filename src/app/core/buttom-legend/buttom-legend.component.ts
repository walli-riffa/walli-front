import {Component, OnInit} from '@angular/core';
import {NumberService} from '../../shared/services/number.service';
import {take} from 'rxjs/operators';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-buttom-legend',
  templateUrl: './buttom-legend.component.html',
  styleUrls: ['./buttom-legend.component.scss']
})
export class ButtomLegendComponent implements OnInit {
  listItem = [];
  modal: boolean;
  modalVoid: boolean;
  menuReserva: boolean;
  numbers = [];

  colorBackground: any;

  images = [
    {path: '/assets/moto/foto-5.jpg'},
    {path: '/assets/moto/foto-2.jpg'},
    {path: '/assets/moto/foto-3.jpg'},
    {path: '/assets/moto/foto-4.jpg'},
    {path: '/assets/moto/foto-1.jpg'},
];
  constructor(
    private numberService: NumberService,
    private wowService: NgwWowService
  ) {
    this.wowService.init();
  }

  ngOnInit(): void {
    this.numberService.getAll()
      .pipe(take(1))
      .subscribe(r => {
        console.log(r);
      }, error => {
        console.log(error);
      });
    for (let i = 1; i <= 600; i++) {
      this.numbers.push(i);
    }
  }

  getNumber(el, index): void {
    if (this.listItem.find((l) => l === el)) {
      this.listItem.splice(index, el);
      console.log(index);
    } else {
      this.listItem.push(el);
    }

    if (this.listItem.length > 0) {
      this.menuReserva = true;
    } else {
      this.menuReserva = false;
    }

  }

  findColors(num: number): boolean {
    return this.listItem.find( (n) => n === num);
  }

  goPayment(): void {
    if (document.getElementById('paymentData')) {
      const scrollTope = document.getElementById('paymentData')
        .offsetTop
        ? document.getElementById('paymentData').offsetTop
        : 6000;
      window.scroll({
        top: scrollTope,
        left: 0,
        behavior: 'smooth',
      });
    }
    this.menuReserva = false;
  }

  popUpOn(): void {
    if (this.listItem.length < 1) {
      this.modalVoid = true;
    } else {
      this.modal = true;
    }
  }
}
