import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goTo(component){
    console.log(component)
    $('html, body').animate({
      scrollTop: $(component).offset().top
    }, 1000);
  }

}
