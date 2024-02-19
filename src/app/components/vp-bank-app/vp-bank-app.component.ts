import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared-service.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-vp-bank-app',
  templateUrl: './vp-bank-app.component.html',
  styleUrls: ['./vp-bank-app.component.scss'],
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
export class VpBankAppComponent implements OnInit {
  displayComponent: boolean = false;
  currentSlideIndex: number = 0;
  images: string[] = [
    'assets/images/Fast Money.png',
    'assets/images/Welcome Page.png',
    'assets/images/Registration.png',
    'assets/images/Login.png',
    'assets/images/Transaction.png'
  ];

  constructor(private sharedService: SharedService, private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigatePortfolio() {
    this.router.navigate(['/portfolio']);
  }

  ngOnInit(): void {
    this.sharedService.getShowVPBankAppObservable().subscribe((display: boolean) => {
      console.log("Received show VP Bank App event");
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
