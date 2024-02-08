import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('initial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial => final', [
        animate('1s ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {
  state: string = 'initial'; // Initial state is 'initial'
  componentInView: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Array of component selectors to query
    const componentSelectors = ['app-home', 'app-about'];

    // Check if any of the components are in the viewport
    for (const selector of componentSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        console.log(`Checking ${selector}`);
        if (this.isElementInViewport(element)) {
          console.log(`${selector} is in view`);
          this.componentInView = true; // Set the flag to true if any component is in view
          return; // Exit the loop early if a component is found
        } else {
          console.log(`${selector} is NOT in view`);
        }
      }
    }
  
    // Reset the flag if no component is in view
    this.componentInView = false;
  }

  private isElementInViewport(element: Element | null): boolean {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    console.log('Rect values:', rect); // Log the rect values
    return (
      rect.top <= window.innerHeight && // Check if top edge is visible
      rect.bottom >= 0 // Check if bottom edge is visible
    );
  }
  
  
  
}
