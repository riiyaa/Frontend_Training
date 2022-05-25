import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <h1>
      Two-Way Binding
    </h1>
    <input [(ngModel)]="name" type="text">
    <h2> Name is : {{name}}</h2>

    <h1> Output Decorator</h1>
    <button (click)="Event()">Output Event</button>
  `,
  styles: [
  ]
})
export class FirstComponent implements OnInit {
  public name = ""
  constructor() {}

  @Output() childEvent = new EventEmitter();

  Event() {
    console.log("child called");
    this.childEvent.emit();
  }
  ngOnInit(): void {
  }


}
