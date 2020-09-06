import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public componentActive: string;
  constructor() { }

  ngOnInit(): void {
  }

  goTo(component){
    $('html, body').animate({
      scrollTop: $(component).offset().top
    }, 1000);
    this.componentActive=component;

  }

}
