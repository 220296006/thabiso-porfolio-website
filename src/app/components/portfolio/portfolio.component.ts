import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Extract project name from query parameters
    this.route.queryParams.subscribe(params => {
      const project = params['project'];
      if (project) {
        this.navigateToPortfolioDetails(project);
      }
    });
  }

  navigateToPortfolioDetails(projectName: string) {
    this.router.navigate([projectName]);
  }
}
