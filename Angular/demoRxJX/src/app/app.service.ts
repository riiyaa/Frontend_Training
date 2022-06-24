import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  Value:number = 0

  a = new Subject();
  b = new Subject()
  // observables = this.a.asObservable()
}
