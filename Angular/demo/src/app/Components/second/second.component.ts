import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  constructor() {
    this.setCurrentClasses()
  }

  title1 = "Data Binding using Interpolation";
  Num1: number = 10;
  Num2: number = 20;
  courses = ["a","b","c"]
  imgUrl = "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg"

  save($event: any) {
    console.log("button clicked");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  currentClasses: Record<string, boolean> = {};
  /* . . . */
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      saveable: true,
      modified: false,
      special:  true,
    };
  }

  @Input() data: number|undefined;


  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }


}
