import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('slideFromTop', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('2000ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('2000ms ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('2000ms ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AboutComponent {
  private hasAnimated = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.hasAnimated) {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        // If the top of the about section is visible
        if (rect.top <= viewHeight) {
          // Trigger animations
          this.hasAnimated = true;
        }
      }
    }
  }
}
