import { Component, OnInit, Input } from '@angular/core';

export type MenuStyle = 'solid' | 'default'
export interface MenuData {
  name?: string,
  url?: string
}

type ExpandState = 'expanded' | 'default'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menuData: MenuData[];

  constructor() {
    console.log(this.menuData)
   }

  ngOnInit() {
  }

  expand() {
    console.log('clicked')
  }

}
