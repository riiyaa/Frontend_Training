import {Component, OnInit} from '@angular/core';
import {AppServiceService} from "./app-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-list';
  constructor(public _app:AppServiceService) { }
  ngOnInit() {
    // @ts-ignore
    // this._app.array = JSON.parse(localStorage.getItem('Data'));

  }
}
