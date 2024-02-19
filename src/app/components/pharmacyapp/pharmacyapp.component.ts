import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared-service.service';

@Component({
  selector: 'app-pharmacy-app',
  templateUrl: './pharmacyapp.component.html',
  styleUrls: ['./pharmacyapp.component.scss']
})
export class PharmacyappComponent implements OnInit {
  displayComponent: boolean = false;

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
}
