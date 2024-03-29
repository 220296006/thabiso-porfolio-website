import { Component, HostListener, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  showNav: boolean = false;

  constructor(private router: Router, private elRef: ElementRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }

  ngOnInit(): void {
    this.checkWindowSize();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.highlightActiveLink();
      }
    });
    window.addEventListener('scroll', () => {
      this.highlightActiveLink();
    });
    this.highlightActiveLink();
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }

  checkWindowSize() {
    const screenWidth = window.innerWidth || 0;
    const breakpoint = 1199;
    this.showNav = screenWidth > breakpoint;
  }

  smoothScrollTo(targetId: string) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Animate scrolling
        block: 'start', // Align element top with viewport top
        inline: 'nearest', // Align element left/right with nearest viewport edge
      });

      // Update the URL to reflect the scrolled section
      const targetSection = targetId === 'portfolio' ? '' : targetId;
      this.router.navigate([], {
        queryParams: { section: targetSection },
        queryParamsHandling: 'merge',
      });
    }
  }

  private highlightActiveLink() {
    const links = this.elRef.nativeElement.querySelectorAll('#navbar .scrollto');
    const scrollPosition = window.scrollY;

    links.forEach((link) => {
      const routerLink = link.getAttribute('routerLink');
      const targetId = routerLink.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetRect = targetElement.getBoundingClientRect();
        const targetTop = targetRect.top + window.pageYOffset;
        const targetBottom = targetRect.bottom + window.pageYOffset;
        const offset = 100; // Adjust offset as needed

        if (
          targetTop <= scrollPosition + offset &&
          targetBottom >= scrollPosition + offset
        ) {
          // Remove active class from all links
          links.forEach((l: any) => l.classList.remove('active'));
          // Add active class to the current link
          link.classList.add('active');
        }
      }
    });
  }
}
