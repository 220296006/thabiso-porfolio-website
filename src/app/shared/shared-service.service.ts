// shared.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private showPharmacyAppSubject = new Subject<boolean>();

  showPharmacyApp$ = this.showPharmacyAppSubject.asObservable();

  showPharmacyApp() {
    this.showPharmacyAppSubject.next(true);
  }

  getShowPharmacyAppObservable() {
    return this.showPharmacyAppSubject.asObservable();
  }
}
