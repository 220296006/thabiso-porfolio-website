import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PharmacyappComponent } from './components/pharmacyapp/pharmacyapp.component';
import { TheeBestProjectComponent } from './components/thee-best-project/thee-best-project.component';
import { VpBankAppComponent } from './components/vp-bank-app/vp-bank-app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'pharmacyapp', component: PharmacyappComponent },
  { path: 'vpbankapp', component: VpBankAppComponent },
  { path: 'theebestproject', component: TheeBestProjectComponent },
  { path: 'portfolio/:projectName', component: PortfolioComponent }, // New route for project detail component

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
