import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  images = [
    {path: '/assets/family.jpg'},
    {path: '/assets/family.jpg'},
]

  ngOnInit(): void {
  }
}
