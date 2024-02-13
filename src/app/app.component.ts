import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  componentInView: boolean = false;

  ngOnInit() {
    // Check if any of the components are initially in the viewport on component initialization
    this.checkComponentsInView();
  }

  checkComponentsInView() {
    // Array of component selectors to query
    const componentSelectors = ['app-home', 'app-about', 'app-services'];

    // Check if any of the components are in the viewport
    for (const selector of componentSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        const isInView = this.isElementInViewport(element);
        if (isInView) {
          this.componentInView = true; // Set the flag to true if any component is in view
          return; // Exit the loop early if a component is found
        }
      }
    }
  }

  isElementInViewport(element: Element | null): boolean {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight && // Check if top edge is visible
      rect.bottom >= 0 // Check if bottom edge is visible
    );
  }
}
