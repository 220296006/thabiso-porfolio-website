import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('slideFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1500ms ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('1500ms ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AboutComponent {

}
