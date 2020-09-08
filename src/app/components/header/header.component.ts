import { Component, OnInit, DoCheck } from '@angular/core';
import ScrollOut from "scroll-out";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public componentActive: string;
  constructor() { }

  ngOnInit(): void {
    ScrollOut({
      targets: "#home, #about, #services, #contact"
    });
  }

  goTo(component){
    $('html, body').animate({
      scrollTop: $(component).offset().top
    }, 1000);
    this.componentActive=component;

  }

  ngDoCheck(){
    if($("#home").attr("data-scroll") == "in"){
      this.componentActive="#home"
    }
    if($("#services").attr("data-scroll") == "in"){
      this.componentActive="#services"
    }
    if($("#about").attr("data-scroll") == "in"){
      this.componentActive="#about"
    }
    if($("#contact").attr("data-scroll") == "in"){
      this.componentActive="#contact"
    }
  }

}
