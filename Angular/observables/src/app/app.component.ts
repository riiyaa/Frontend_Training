import {Component, OnInit} from '@angular/core';
import { Demo } from './demo.model';
import {DemoService} from "./demo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'observables';
  students : Demo[] = []
  constructor(private _service : DemoService) {
  }
  ngOnInit() {
    const studentsObservable = this._service.getStudents();
    studentsObservable.subscribe((studentsData: Demo[]) => {
      this.students = studentsData;
    });
  }
}
