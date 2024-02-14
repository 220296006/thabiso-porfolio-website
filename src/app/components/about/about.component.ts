import { Component, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private hasAnimated = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }
  
  checkScroll() {
    if (!this.hasAnimated) {
      const aboutSection = this.elementRef.nativeElement.querySelector('#about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= viewHeight) {
          this.hasAnimated = true;
          this.animateElements();
        }
      }
    }
  }

  animateElements() {
    const elementsToAnimate = this.elementRef.nativeElement.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach((element) => {
      this.renderer.addClass(element, 'active');
    });
  }
}
