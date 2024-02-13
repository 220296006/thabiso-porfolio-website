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
    // Call checkScroll initially to check if animation should trigger on page load
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('Window scrolled!');
    // Call checkScroll whenever window is scrolled
    this.checkScroll();
  }
  
  checkScroll() {
    if (!this.hasAnimated) {
      const aboutSection = this.elementRef.nativeElement.querySelector('#about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Log the values
        console.log('Top of about section:', rect.top);
        console.log('View height:', viewHeight);
        
        // If the top of the about section is visible
        if (rect.top <= viewHeight) {
          // Trigger animations
          console.log('About section in view. Triggering animations.');
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
