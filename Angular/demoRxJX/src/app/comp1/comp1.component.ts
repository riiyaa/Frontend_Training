import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor(public _service: AppService) { }

  ngOnInit(): void {
    // const subject = new BehaviorSubject(0); // 0 is the initial value
    //
    // subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`),
    // });
    //
    // subject.next(1);
    // subject.next(2);
    //
    // subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`),
    // });
    //
    // subject.next(3);
  }

  // a = new Subject();
  // observables = this.a.asObservable()
  decrement() {
    this._service.Value -= 1
    // this.a.subscribe({
    //   next:(data:any)=>{
    //     console.log(data)
    //   },
    //   error:(data:any)=>{
    //     console.log("Error",data)
    //   }
    // })

    this._service.b.subscribe({
      next: (data: any) => {
        console.log("Decrement", data)
      },
    })
  }
  increment() {
    this._service.Value += 1
    // this.a.next("1");
    // this.a.next("2");
    //
    // this.a.subscribe({
    //   next:(data:any)=>{
    //     console.log(data)
    //   },
    // });
    //

    this._service.a.subscribe({
      next: (data: any) => {
        console.log("Increment", data)
      },
    })
    // this.a.complete();
  }
}

