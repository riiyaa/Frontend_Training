import { Component } from '@angular/core';
import {trigger, style, animate, transition, query, sequence, stagger, state} from '@angular/animations';
// import { DropDownAnimation } from "./app-animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({opacity: 1}))
      ])
    ]),
    trigger(
      'slideView',
      [
        state('true', style({ transform: 'translateX(100%)', opacity: 0 })),
        state('false', style({ transform: 'translateX(0)', opacity: 1 })),
        transition('0 => 1', animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))),
        transition('1 => 1', animate('500ms', style({ transform: 'translateX(100%)', 'opacity': 0 }))),
      ]),

    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
      ]),

      transition(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('0ms ease-in', style({ transform: 'translateX(100%)', 'opacity': 0 }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  title = 'dynamicMenu';
  click = false
  clickBtn() {
    this.click = !this.click
    this.leaveClick = false
    this.timeClick = false
    this.toggleClick = false
    this.passClick = false
    this.payClick = false
  }
  timeClick = false
  clickTime(){
    this.timeClick = !this.timeClick
    this.leaveClick = false
    this.payClick = false
  }
  leaveClick = false
  leaveTime() {
    this.leaveClick = !this.leaveClick
    this.timeClick = false
    this.payClick = false
  }
  payClick = false
  payTime(){
    this.payClick = !this.payClick
    this.timeClick = false
    this.leaveClick = false
  }
  passClick = false
  passTime() {
    this.passClick = !this.passClick
    this.toggleClick = false
    this.click = false
    this.payClick = false
    this.leaveClick = false
    this.timeClick = false
  }
  toggleClick = false
  toggleTime() {
    this.toggleClick = !this.toggleClick
    this.click = false
    this.passClick = false
    this.payClick = false
    this.leaveClick = false
    this.timeClick = false
  }
}
