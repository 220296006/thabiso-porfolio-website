import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared-service.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-pharmacy-app',
  templateUrl: './pharmacyapp.component.html',
  styleUrls: ['./pharmacyapp.component.scss']
})
export class PharmacyappComponent implements OnInit, AfterViewInit {

  displayComponent: boolean = false;

  constructor(private sharedService: SharedService, private router: Router) { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.portfolio-details-slider swiper', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigatePortfolio() {
    this.router.navigate(['/portfolio']);
    }

  ngOnInit(): void {
    this.sharedService.getShowPharmacyAppObservable().subscribe(() => {
      console.log("Received show pharmacy app event");
      this.displayComponent = true;
    });
  }
}