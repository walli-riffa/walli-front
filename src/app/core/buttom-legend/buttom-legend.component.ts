import {Component, OnInit} from '@angular/core';
import {NumberService} from '../../shared/services/number.service';
import {take} from 'rxjs/operators';
import {NgwWowService} from 'ngx-wow';
import {Numbers} from '../../shared/models/numbers';

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
  numbers: Numbers[] = [];
  numbersAvailable: Numbers[] = [];
  numbersReserved: Numbers[] = [];

  allNumbers: Numbers[] = [];

  hasError!: boolean;


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
        this.allNumbers = r;
        this.numbers = r.filter(n => n.active);
        this.numbersAvailable =  r.filter(n => n.active);
        this.numbersReserved =  r.filter(n => !n.active);
      }, () => {
        this.hasError = true;
      });
  }

  filter(active: boolean): void {
    this.numbers = this.allNumbers.filter(n => n.active === active);
  }

  selected(): void {
    this.numbers = this.listItem;
  }

  getNumber(el): void {
    const numberRemove = this.listItem.find((l) => l === el);
    if (numberRemove) {
      this.listItem = this.listItem.filter(n => n !== numberRemove);
    } else {
      this.listItem.push(el);
    }

    if (this.listItem.length > 0) {
      this.menuReserva = true;
    } else {
      this.menuReserva = false;
    }

  }

  findColors(num: Numbers): boolean {
    return this.listItem.find((n) => n === num);
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
