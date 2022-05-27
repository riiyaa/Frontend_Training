import {AfterContentInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {count} from "rxjs";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit {
  counter = 0
  interval : any;
  @Input()
  cname:string|undefined;
  constructor() {
    console.log("Child constructor called");
  }

  ngOnInit(): void {
    console.log("Child OnInit called");

    // this.interval = setInterval(()=>{
    //   this.counter++;
    //   console.log(this.counter)
    // },1000)
  }
  ngOnDestroy() {
    console.log("Child OnDestroy called");
    // clearInterval(this.interval)
  }
  ngOnChanges(changes:SimpleChanges) {
    console.log(changes)
    console.log("Child OnChanges called");
  }
  ngDoCheck() {
    console.log("Child DoCheck called");
  }
  ngAfterContentInit() {
    console.log("Child AfterContentInit called");
  }
}
