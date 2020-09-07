import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule } from '@angular/forms'; //Modulo para poder usar el ngModule
import { HttpClientModule } from '@angular/common/http'; //Para poder hacer peticiones ajax

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    SocialmediaComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
