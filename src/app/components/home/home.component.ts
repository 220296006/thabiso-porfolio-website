import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
  @Inject(PLATFORM_ID) private platformId: any,
  private renderer: Renderer2, private el: ElementRef)
   {}

  ngOnInit(): void {
    this.scrollIntoView('home');
    this.scrollIntoView('about');
    
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
  
  private scrollIntoView(sectionId: string): void {
    const section = this.el.nativeElement.querySelector(sectionId);
    if (section) {
      this.renderer.setProperty(section, 'scrollIntoView', { behavior: 'smooth', block: 'start' });
    }
  }
}
