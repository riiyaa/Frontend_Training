import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  constructor() {

  }

  title1 = "Data Binding using Interpolation";
  Num1: number = 10;
  Num2: number = 20;
  imgUrl = "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg"

  save($event: any) {
    console.log("button clicked");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
