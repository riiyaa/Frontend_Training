import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'housingForm';
  constructor(public _appService :AppService) {
  }
  ngOnInit() {
    // @ts-ignore
    this._appService.array = JSON.parse(localStorage.getItem('Details'))
  }
}
