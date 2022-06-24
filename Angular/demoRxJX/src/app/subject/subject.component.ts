import { Component, OnInit } from '@angular/core';
import {AsyncSubject, BehaviorSubject, ReplaySubject, Subject} from "rxjs";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
const subject = new Subject();

// Subscriber 1------------------------------------------------------------------------------------------------------
// subject.subscribe((data)=>{
//   console.log('Subscriber A:', data)
// });
//
// subject.next(Math.floor(Math.random()*100));
// subject.next(Math.floor(Math.random()*100));
// subject.next(Math.floor(Math.random()*100));
//
// // Subscriber 2
// subject.subscribe((data)=>{
//     console.log('Subscriber B:', data)
// });
//
// subject.next(Math.floor(Math.random()*100));

/**
 * behavioural subject example
 */

// const sub1 = new BehaviorSubject(1);

// subscriber 1-----------------------------------------------------------------------------
// sub1.subscribe((data: any) => {
//     console.log('Subscriber A:', data);
// });
//
// sub1.next(Math.floor(Math.random()*100));
// sub1.next(Math.floor(Math.random()*100));
//
// // subscriber 2------------------------------------------------------------------------------
//  sub1.subscribe((data) => {
//      console.log('Subscriber B:', data);
//  });
//
// sub1.next(Math.floor(Math.random()*100));

/**
 * replay subject
 */

//it can store previous data also
// const subjectivity = new ReplaySubject(1);

// subscriber 1------------------------------------------------------------------------------------------
// subjectivity.subscribe((data) => {
//   console.log('Reply Subscriber A:', data);
// });
//
// subjectivity.next(Math.random())
// subjectivity.next(Math.random())
// subjectivity.next(Math.floor(Math.random()*100))
//
// // subscriber 2------------------------------------------------------------------------------------------
// subjectivity.subscribe((data) => {
//   console.log('Reply Subscriber B:', data);
// });
//
// subjectivity.next(Math.floor(Math.random()*100));


/**
 * Async subject calls
 */

//this returns only when complete() is called and returns only latest value

// const async = new AsyncSubject();
//
// // subscriber 1-------------------------------------------------------------------
// async.subscribe((data) => {
//     console.log('Async Subscriber A:', data);
// });
//
// async.next(Math.random())
// async.next(Math.random())
// async.next(Math.random())
//
// // subscriber 2
// async.subscribe((data) => {
//   console.log('Async Subscriber B:', data);
// });
//
// async.next(Math.floor(Math.random()*100));
// async.complete();
