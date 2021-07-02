import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  slideIndex = 0;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.showSlides();
  }

  showSlides(): void {
    let i;
    const slides = document.getElementsByClassName('mySlides');


    for (i = 0; i < slides.length; i++) {
      this.renderer.setStyle(slides[i], 'display', 'none');
      this.renderer.removeClass(slides[i], 'animation');
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) { this.slideIndex = 1; }

    this.renderer.setStyle(slides[this.slideIndex - 1], 'display', 'block');
    this.renderer.addClass(slides[this.slideIndex - 1], 'animation');
    setTimeout(() => {
      this.showSlides();
    }, 2000);
  }

}
