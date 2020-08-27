import { Component, Input, ViewChild, ElementRef, OnChanges, AfterViewInit } from '@angular/core';
import { Animator } from '../../../helpers/animator'
import { trigger, style, state, transition, animate } from '@angular/animations';


export type MenuStyle = 'solid' | 'default'
export interface MenuData {
  name?: string,
  url?: string
}

type ExpandState = 'expanded' | 'default'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('menuExpand', [
      state('expanded', style({
        width: '100%',
      })),
      state('default', style({
        width: '15%'
      })),
      transition(
        'expanded <=> default',
        animate('0.6s cubic-bezier(0.83, 0, 0.17, 1)')
      )
    ])
  ]
})
export class MenuComponent implements OnChanges, AfterViewInit {
  @ViewChild('elements', {static: true}) elements: ElementRef<HTMLDivElement>
  @ViewChild('menuBase', {static: true}) menuBase: ElementRef<HTMLDivElement>
  @ViewChild('menu', {static: true}) menu: ElementRef<HTMLDivElement>

  public expandState: ExpandState = 'default'
  public menuExpansionDone = false;
  public buttonDisabled = false;
  public animator = new Animator;

  @Input() menuData: MenuData[];

  constructor() {
    console.log(this.menuData)
   }

  ngOnChanges() {
  }

  ngAfterViewInit() {
    // this.elementsAnimationHandler();
  }

  private elementsAnimationHandler(
    callbackfn: () => void,
    element: HTMLDivElement,
    timeline: gsap.core.Timeline,
    { hideElements }: { hideElements: boolean}
  ) {
    console.log('elements handler')
  }

  // @param callback

  public expansionDone({toState}: {toState: ExpandState}): void {
    if (toState === 'expanded') {
      this.menuExpansionDone = true;
      // this.elementsAnimationHandler();
    }

  }

  expand() {
    this.expandState === 'default' 
    ? (this.expandState = 'expanded') 
    : (this.expandState = 'default');

    if (this.expandState === 'default') {
      this.menuExpansionDone = false;
      // this.elementsAnimationHandler();
    }
  }

}
