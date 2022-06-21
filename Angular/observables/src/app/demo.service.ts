import { Injectable } from '@angular/core';
import {Demo} from './demo.model'
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  public getStudents(): any {
    let studentsObservable: Observable<unknown>;
    studentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.students);
      }, 1000);
    });

    return studentsObservable;
  }

  students: Demo[] = [{
    id: 1,
    name: 'grunt',
    enrollmentnumber: 110470116021,
    college: 'VVP Engineering College',
    university: 'GTU'
  },
    {
      id: 2,
      name: 'Rishabh',
      enrollmentnumber: 110470116023,
      college: 'VVP Engineering College',
      university: 'GTU'
    },
    {
      id: 3,
      name: 'Ankit',
      enrollmentnumber: 110470116022,
      college: 'VVP Engineering College',
      university: 'GTU'
    }];
}

