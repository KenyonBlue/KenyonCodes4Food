import { Component, Input, ViewChild, ElementRef, OnChanges, AfterViewInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(private cdr: ChangeDetectorRef) {
    console.log(this.menuData)
   }

  ngOnChanges() {
  }

  ngAfterViewInit() {
    this.elementsAnimationHandler(null, this.elements.nativeElement, this.animator.timeline, {hideElements: true});
  }

  expand() {
    this.expandState === 'default' 
    ? (this.expandState = 'expanded') 
    : (this.expandState = 'default');

    if (this.expandState === 'default') {
      this.menuExpansionDone = false;
      this.elementsAnimationHandler(
        this.onComplete,
        this.elements.nativeElement,
        this.animator.timeline,
        {
          hideElements: true
        }
      );
    }
  }

  private elementsAnimationHandler(
    callbackfn: () => void,
    element: HTMLDivElement,
    timeline: gsap.core.Timeline,
    { hideElements }: { hideElements: boolean}
  ) {
    if (hideElements) {
      timeline.to(element, {
        duration: 0.1,
        autoAlpha: 0
      })
      .to(element.children, {
        opacity: 0,
        y: -5,
        onComplete: callbackfn
      });
    } else {
      timeline.to(element, {
        duration: 0.1,
        autoAlpha: 1,
      })
      .to(element.children, {
        duration: 0.15,
        opacity: 1,
        y: 0,
        stagger: 0.09,
        onComplete: callbackfn
      });
    }
  }

  // @param callback function called after animation completes
  // @param element to animate 
  // timeline gsap sequencing propert used for chaining tween
  // hide elements - wheather hidden elements or not 

  public expansionDone({toState}: {toState: ExpandState}): void {
    if (toState === 'expanded') {
      this.menuExpansionDone = true;
      this.elementsAnimationHandler(
        this.onComplete,
        this.elements.nativeElement,
        this.animator.timeline,
        {
          hideElements: false 
        }
      );
    }
  }

  private onComplete = (): void => {
    this.buttonDisabled = false;
    this.cdr.detectChanges();
  }
}
