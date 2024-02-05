import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'thabiso-porfolio-website';
  currentComponent: string;

  constructor(private store: Store<{ app: AppState }>) {}

  ngOnInit() {
    this.store.select('app').subscribe(appState => {
      this.currentComponent = appState.currentComponent;
    });
  }

  scrollToComponent(componentId: string) {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

