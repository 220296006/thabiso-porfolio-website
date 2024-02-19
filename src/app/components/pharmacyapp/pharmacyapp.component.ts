import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared-service.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-pharmacy-app',
  templateUrl: './pharmacyapp.component.html',
  styleUrls: ['./pharmacyapp.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class PharmacyappComponent implements OnInit {
  displayComponent: boolean = false;
  currentSlideIndex: number = 0;
  images: string[] = [
    'assets/images/PharmacyApp.png',
    'assets/images/PharmacyApp-System-Design.drawio.png',
    'assets/images/Home-PharmacyApp.png',
    'assets/images/Users.png',
    'assets/images/Customers.png',
    'assets/images/Medications.png',
    'assets/images/Prescriptions.png',
    'assets/images/Invoices.png',
    'assets/images/Inventory.png',
    'assets/images/Create-User.png',
    'assets/images/Update-User.png'
  ];

  constructor(private sharedService: SharedService, private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigatePortfolio() {
    this.router.navigate(['/portfolio']);
  }

  ngOnInit(): void {
    this.sharedService.getShowPharmacyAppObservable().subscribe((display: boolean) => {
      console.log("Received show pharmacy app event");
      this.displayComponent = display;
    });
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }

}
