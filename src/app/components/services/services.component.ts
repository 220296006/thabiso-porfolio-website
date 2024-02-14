import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../image-modal/image-modal.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private dialog: MatDialog) { }

  descriptions: string[] = [
    "I specialize in creating intuitive and responsive user interfaces. From building interactive web applications to crafting visually appealing websites, I ensure a seamless user experience on the front end.",
    "My expertise extends to server-side development, where I design and implement robust APIs and backend systems. I focus on performance, security, and scalability to power your applications.",
    "Efficient data management is crucial. I handle databases with precision, optimizing queries, ensuring data integrity, and utilizing the right database solutions for your application's needs."
  ];

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

  showDescription: boolean[] = [false, false, false]; // Initialize an array to track the visibility of descriptions

  toggleDescription(index: number) {
      // Toggle the visibility of the description based on index
      this.showDescription[index] = !this.showDescription[index];
  }

  showImage(imageSrc: string) {
    this.dialog.open(ImageModalComponent, {
      data: { imageSrc }, // Corrected to pass image source as an object
      width: '80%',
      height: '80%',
    });
  }
}
