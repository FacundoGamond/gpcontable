import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
