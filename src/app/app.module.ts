import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainComponent } from './core/main/main.component';
import { BannerComponent } from './core/banner/banner.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ButtomLegendComponent } from './core/buttom-legend/buttom-legend.component';
import { LightboxComponent } from './shared/lightbox/lightbox.component';
import {LoadingScreenComponent} from './shared/components/loading-screen/loading-screen.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Interceptor} from './shared/guards/interceptor';
import { MenuBottomComponent } from './core/menu-bottom/menu-bottom.component';
import { DataPaymentComponent } from './core/data-payment/data-payment.component';
import { NgwWowModule } from 'ngx-wow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './dashbord/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BannerComponent,
    ButtomLegendComponent,
    LightboxComponent,
    LoadingScreenComponent,
    MenuBottomComponent,
    DataPaymentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    NgwWowModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
