import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { trigger, transition, style, animate } from '@angular/animations';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    trigger('fade', [
      transition(':increment', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 })),
      ]),
      transition(':decrement', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('slide', [
      transition('0 => 1', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0%)', opacity: 1 })),
      ]),
      transition('0 => -1', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0%)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class ServicesComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private dialog: MatDialog) { }
  tooltipText: string = 'This is a tooltip';

  tooltipClass = {
    containerClass: 'tooltip-custom'
  };
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
      width: '90%',
      height: '90%',
    });
  }

  testimonials: any[] = [
    {
      quote:
        'Thabiso consistently demonstrates diligence in his work. He fearlessly delves into new skills, constructing projects to enhance his capabilities. He is committed to solving challenges independently but also knows when to seek assistance. Thabiso\'s adaptability and collaborative nature make a valuable team player in the realm of software development.',
      image: 'assets/images/Tiyani.jpeg',
      name: 'Tiyani Baloyi',
      designation:
        'Junior Software Engineer, South African Radio and Astronomy Observatory (SARAO)',
    },
    {
      quote:
        'Thabiso is a hard worker, has a positive attitude, and shows a huge willingness to grow. He works well under pressure.',
      image: 'assets/images/Luvo.PNG',
      name: 'Luvo Ntshwela',
      designation: 'Junior Software Developer, Entelect',
    },
  ];

  selectedIndex = 0;

  ngOnInit(): void {
    // Automatically switch testimonials every 5 seconds
    setInterval(() => this.nextTestimonial(), 5000);
    this.setupIconAnimations();
  }

  setupIconAnimations(): void {
    const icons = document.querySelectorAll('.row2 .icon-box');

    icons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        anime({
          targets: icon,
          translateX: [-5, 5],
          easing: 'easeInOutQuad',
          duration: 100,
          direction: 'alternate',
          loop: true
        });
      });

      icon.addEventListener('mouseleave', () => {
        anime.remove(icon); // Remove any running animations
      });
    });
  }

  nextTestimonial(): void {
    const currentIndex = this.testimonials.findIndex((t) => t === this.testimonials[this.selectedIndex]);
    this.selectedIndex = (currentIndex + 1) % this.testimonials.length;
  }
}
