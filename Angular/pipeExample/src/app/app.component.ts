import {ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default

})
export class AppComponent {
  title = 'pipeExample';
  todayDate = new Date()
  a1 = '12345'
  jsonVal = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  valueUpdate(){
    this.a1 += 1
    console.log(this.a1)

  }

  // constructor(private ref: ChangeDetectorRef) {
  //   setInterval( () =>{
  //     this.valueUpdate()
  //     // this.ref.markForCheck()
  //   },1000)
  // }

  // addtion(){
  //   console.log(this.a1)
  //   return this.a1.slice(0,3)
  // }

  // websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com','Google.com']
  websiteList: any = [
    {
      text: 'Show All Bookmarks'
    },
    {
      text: 'Bookmarks Toolbar',
      items: [
        {
          text: 'Most Visited',
          items:[
            {
              text: 'Gmail'
            },
            {
              text: 'Google'
            }
          ]
        },
        {
          text: 'Recently Added'
        }
      ]
    }];
  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }
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
