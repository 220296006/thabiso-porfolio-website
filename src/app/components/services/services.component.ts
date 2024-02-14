import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const servicesElement = this.elementRef.nativeElement.querySelector('.services');
    const boundingClientRect = servicesElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the bottom of the section is in the viewport
    if (boundingClientRect.top < windowHeight && boundingClientRect.bottom >= 0) {
      this.renderer.addClass(servicesElement, 'slide-in');
    }
  }

   showDescription: boolean[] = [false, false, false, false]; // Initialize an array to track the visibility of descriptions

  toggleDescription(index: number) {
    this.showDescription[index] = !this.showDescription[index]; // Toggle the visibility of the description based on index
  }
}
