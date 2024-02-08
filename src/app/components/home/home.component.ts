import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';
import { trigger, state, style, transition, animate, AnimationEvent  } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('initial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial => final', [
        animate('2s ease-in-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  state: string = 'initial'; // Initial state is 'initial'

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.state = 'final'; // Change the state to trigger animation
    }, 2000); // Delay for 2 seconds
  }

  onAnimationDone(event: AnimationEvent): void {
    if (event.toState === 'final') {
      if (isPlatformBrowser(this.platformId)) {
        const typedElement = document.querySelector('.typed') as HTMLElement | null;
        if (typedElement) {
          const typedStringsAttribute = typedElement.getAttribute('data-typed-items') || '';
          const typedStrings = typedStringsAttribute.split(',');

          new Typed('.typed', {
            strings: typedStrings,
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
          });
        }
      }
    }
  }

}
