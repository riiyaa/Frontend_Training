import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit {
  counter:number = 0
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
    this.counter++
  }
  decrement(){
    this.counter--
  }
}
