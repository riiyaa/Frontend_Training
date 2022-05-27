import {AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit , OnDestroy , OnChanges,DoCheck,AfterContentInit {

  cname = " ";
  isChild : boolean = true;
  constructor() {
    console.log("Parent constructor called");
  }
  ngOnInit(): void {
    console.log("Parent OnInit called");
  }
  ngOnChanges() {
    // console.log(changes)
    console.log("Parent OnChanges called");
  }
  ngOnDestroy() {
    console.log("Parent OnDestroy called");
  }
  ngDoCheck() {
    console.log("Parent DoCheck called");
  }
  ngAfterContentInit() {
    console.log("Parent AfterContentInit called");
  }

  toggleChild(){
    this.isChild = !this.isChild
  }
}
