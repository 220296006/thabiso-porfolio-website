import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  @Output() displayPharmacyApp: EventEmitter<void> = new EventEmitter<void>();

  navigateToPortfolioDetails(project: string) {
    console.log('Navigating to portfolio details:', project); // Log to check if method is being called
    if (project === 'pharmacyapp' || project === 'theebestproject' || project === 'vpbankapp') {
      this.displayPharmacyApp.emit();
    }
  }
}
