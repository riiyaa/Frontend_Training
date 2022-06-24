import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {ReplaySubject} from "rxjs";

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  constructor(public _service: AppService) { }
  //
  ngOnInit(): void {
  //   /// ReplaySubject----------------------------------------------------------------------------------------
  //   let sub = new ReplaySubject(2);
  //   sub.subscribe({
  //     next: (v) => console.log(`observerA: ${v}`),
  //   })
  //   sub.next(1);
  //   sub.next(2);
  //   sub.next(3);
  //   sub.next(4);
  //
  //   sub.subscribe({
  //     next: (v) => console.log(`observerB: ${v}`),
  //   });
  //
  //   sub.next(5);

    this._service.a.next(this._service.Value);
    this._service.b.next(this._service.Value);
  }



}
