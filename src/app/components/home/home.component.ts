import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const typedElement = document.querySelector('.typed') as HTMLElement | null;
      if (typedElement) {
        const typedStringsAttribute = typedElement.getAttribute('data-typed-items') || '';
        const typedStrings = typedStringsAttribute.split(',');

        new Typed('.typed', {
          strings: typedStrings, 
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          loop: true,
        });
      }
    }
  }
}
