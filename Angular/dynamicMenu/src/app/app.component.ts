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
