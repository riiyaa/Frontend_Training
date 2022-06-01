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
  }
  leaveClick = false
  leaveTime() {
    this.leaveClick = !this.leaveClick
    this.timeClick = false
  }
}
