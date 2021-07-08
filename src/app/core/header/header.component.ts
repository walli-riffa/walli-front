import { Component, HostListener, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  slideIndex = 0;

  topPosToStartShowing = 110;
  showButton: boolean;

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit(): void {
    this.showButton = false;
    this.checkScroll();

  }

  @HostListener('window:scroll')

  checkScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }
}
