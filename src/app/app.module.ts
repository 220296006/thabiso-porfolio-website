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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AboutComponent,
    ServicesComponent,
    ImageModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [], 
   bootstrap: [AppComponent]
})
export class AppModule { }
