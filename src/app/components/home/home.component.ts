import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public images: any;
  constructor() { }

  ngOnInit(): void {

    this.images = [
      { path: '../../assets/images/1.jpg' },
      { path: '../../assets/images/2.jpg' },
      { path: '../../assets/images/3.jpg' },

    ]
  }

}
