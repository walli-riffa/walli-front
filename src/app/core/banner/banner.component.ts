import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isMobile() { 
    const userAgent = window.navigator.userAgent.toLocaleLowerCase(); 
    return userAgent.includes('iphone') || userAgent.includes('android'); 
  }

}
