import { Component, OnInit } from '@angular/core';
import { MenuData } from '../components/menu/menu.component';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  public menuData: MenuData[];
  public sessionId: number;
  public max: number = 9999999;
  public colors = {
    color: '#6f45ff',
    menuCOlor: '#8d6cff'
  }

  constructor() { 
    this.createSessionId(this.max);

    this.menuData = [
      { name: '1', url: '/dev'},
      { name: '2', url: '/dev'},
      { name: '3', url: '/dev'}
    ]
  }

  createSessionId(max) {
    this.sessionId = Math.floor(Math.random() * Math.floor(max));;
  }

  ngOnInit() {
  }

}
