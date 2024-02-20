import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './components/services/services.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PharmacyappComponent } from './components/pharmacyapp/pharmacyapp.component';
import { SharedService } from './shared/shared-service.service';
import { TheeBestProjectComponent } from './components/thee-best-project/thee-best-project.component';
import { VpBankAppComponent } from './components/vp-bank-app/vp-bank-app.component';
import { ContactComponent } from './components/contact/contact.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AboutComponent,
    ServicesComponent,
    ImageModalComponent,
    PortfolioComponent,
    PharmacyappComponent,
    TheeBestProjectComponent,
    VpBankAppComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    TooltipModule.forRoot(),

  ],
  providers: [SharedService], 
   bootstrap: [AppComponent]
})
export class AppModule { }
