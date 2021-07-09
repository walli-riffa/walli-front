import {Component, OnInit} from '@angular/core';
import {LoaderService} from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'sorteioWalison';
  loader;
  constructor(
    private  loaderService: LoaderService
  ) {
  }

  ngOnInit(): void {
    this.loader = this.loaderService.isLoading;
  }

}
