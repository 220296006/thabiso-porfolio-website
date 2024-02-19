import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared-service.service';

@Component({
  selector: 'app-vp-bank-app',
  templateUrl: './vp-bank-app.component.html',
  styleUrls: ['./vp-bank-app.component.scss']
})
export class VpBankAppComponent implements OnInit {
  displayComponent: boolean = false;

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
}
