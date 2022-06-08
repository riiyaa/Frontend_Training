import { Component, OnInit } from '@angular/core';
import {AppServiceService} from "../../app-service.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor(public _scheduleService : AppServiceService) { }

  ngOnInit(): void {
  }
  panelOpenState = false
  addTask(value: string) {

  }
}
