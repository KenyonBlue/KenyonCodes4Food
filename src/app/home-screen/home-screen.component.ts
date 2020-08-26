import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  public sessionId: number;
  public max: number = 9999999;

  constructor() { 
    this.createSessionId(this.max);
  }

  createSessionId(max) {
    this.sessionId = Math.floor(Math.random() * Math.floor(max));;
  }

  ngOnInit() {
  }

}
