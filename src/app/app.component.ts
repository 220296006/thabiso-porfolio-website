import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from 'src/app/shared/shared-service.service';
import anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayPharmacyApp = false;
  displayTheeBestProject = false;
  displayVPBankApp = false;
  currentRoute: string = '';

  animateSphere() {
    const sphere = document.querySelector('.sphere-animation') as HTMLElement;

    anime({
      targets: sphere,
      translateY: ['0%', '50%'],
      rotate: '1turn',
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    });
  }
  constructor(private sharedService: SharedService, private router: Router) {
    // Subscribe to router events to update currentRoute
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects.replace('/', '');
        this.displayPharmacyApp = this.currentRoute === 'pharmacyapp'; 
        this.displayTheeBestProject = this.currentRoute === 'theebestproject';
        this.displayVPBankApp = this.currentRoute === 'vpbankapp'
      }
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.animateSphere();

    // Subscribe to observables for displaying other projects
    this.sharedService.getShowPharmacyAppObservable().subscribe((display: boolean) => {
      this.displayPharmacyApp = display;
    });

    this.sharedService.getShowTheeBestProjectObservable().subscribe((display: boolean) => {
      this.displayTheeBestProject = display;
    });

    this.sharedService.getShowVPBankAppObservable().subscribe((display: boolean) => {
      this.displayVPBankApp = display;
    });
  }

  // Methods to handle display events for each project
  onDisplayPharmacyApp() {
    this.displayPharmacyApp = true;
    this.displayTheeBestProject = false;
    this.displayVPBankApp = false;
  }

  onDisplayTheeBestProject() {
    this.displayPharmacyApp = false;
    this.displayTheeBestProject = true;
    this.displayVPBankApp = false;
  }

  onDisplayVPBankApp() {
    this.displayPharmacyApp = false;
    this.displayTheeBestProject = false;
    this.displayVPBankApp = true;
  }
}
