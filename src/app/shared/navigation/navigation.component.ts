import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  showNav: boolean = false;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.checkWindowSize();
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.highlightActiveLink();
      }
    });
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }

  checkWindowSize() {
    const screenWidth = window.innerWidth || 0;
        const breakpoint = 991;

    if (screenWidth <= breakpoint) {
      this.showNav = false;
    } else {
      this.showNav = true;
    }
  }

  scrollToElement(hash: string) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  
      this.showNav = false;
    }
  }
  

  private highlightActiveLink() {
    if (isPlatformBrowser(this.platformId)) {
      const currentRoute = this.router.url;
      const links = document.querySelectorAll('#navbar .scrollto');

      links.forEach(link => {
        const route = link.getAttribute('routerLink');
        if (route && currentRoute.includes(route)) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }
}
