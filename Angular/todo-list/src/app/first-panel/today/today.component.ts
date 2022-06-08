import { Component, OnInit } from '@angular/core';
import {AppServiceService} from "../../app-service.service";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  constructor(public _today : AppServiceService) { }

  ngOnInit(): void {
  }
  panelOpenState = false
  addTask(value: string) {

  }
}
