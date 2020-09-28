import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public images: any;
  constructor() {
    this.images = [
      '../../assets/images/1.jpg',
      '../../assets/images/2.jpg',
      '../../assets/images/3.jpg',
      '../../assets/images/4.jpg'
    ]
  }

  ngOnInit(): void {
  }

}
