import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private showPharmacyAppSubject = new Subject<boolean>();
  private showTheeBestProjectSubject = new Subject<boolean>();
  private showVPBankAppSubject = new Subject<boolean>();

  // Observables for showing each project
  showPharmacyApp$ = this.showPharmacyAppSubject.asObservable();
  showTheeBestProject$ = this.showTheeBestProjectSubject.asObservable();
  showVPBankApp$ = this.showVPBankAppSubject.asObservable();

  // Methods to emit events for showing each project
  showPharmacyApp() {
    this.showPharmacyAppSubject.next(true);
  }

  showTheeBestProject() {
    this.showTheeBestProjectSubject.next(true);
  }

  showVPBankApp() {
    this.showVPBankAppSubject.next(true);
  }

  // Methods to get observables for each project
  getShowPharmacyAppObservable() {
    return this.showPharmacyAppSubject.asObservable();
  }

  getShowTheeBestProjectObservable() {
    return this.showTheeBestProjectSubject.asObservable();
  }

  getShowVPBankAppObservable() {
    return this.showVPBankAppSubject.asObservable();
  }
}
