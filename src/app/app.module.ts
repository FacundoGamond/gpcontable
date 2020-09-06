import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    SocialmediaComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
