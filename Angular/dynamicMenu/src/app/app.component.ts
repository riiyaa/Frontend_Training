import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamicMenu';

  click = false
  clickBtn() {
    this.click = !this.click
    this.leaveClick = false
    this.timeClick = false
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
    console.log("234345")
    this.payClick = !this.payClick
    this.timeClick = false
    this.leaveClick = false
  }

  passClick = false
  passTime() {
    this.passClick = !this.passClick
  }

  toggleClick = false
  toggleTime() {
    this.toggleClick = !this.toggleClick
  }

  test() {
    console.log("test")
  }
}
