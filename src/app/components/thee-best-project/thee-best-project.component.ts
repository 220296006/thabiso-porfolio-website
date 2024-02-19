import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared-service.service';

@Component({
  selector: 'app-thee-best-project',
  templateUrl: './thee-best-project.component.html',
  styleUrls: ['./thee-best-project.component.scss']
})
export class TheeBestProjectComponent implements OnInit {
  displayComponent: boolean = false;

  constructor(private sharedService: SharedService, private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigatePortfolio() {
    this.router.navigate(['/portfolio']);
  }

  ngOnInit(): void {
    this.sharedService.getShowTheeBestProjectObservable().subscribe((display: boolean) => {
      console.log("Received show Thee Best Project event");
      this.displayComponent = display;
    });
  }
}
