import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { navigateTo } from 'src/app/app.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  showNav: boolean = false;

  constructor(private router: Router,  private store: Store) {}

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
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }

  checkWindowSize() {
    const screenWidth = window.innerWidth || 0;
    const breakpoint = 1199;
    if (screenWidth <= breakpoint) {
      this.showNav = false;
    } else {
      this.showNav = true;
    }
  }

  scrollToComponent(componentId: string) {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  

  private highlightActiveLink() {
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
