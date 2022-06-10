import {Component, OnInit, ViewChild} from '@angular/core';
import {AppServiceService} from "../../app-service.service";
import {MatAccordion, MatExpansionPanel} from "@angular/material/expansion";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  dateValue: any;
  index: any;

  constructor(public _scheduleService : AppServiceService) { }
  @ViewChild(MatExpansionPanel) panel?: MatExpansionPanel;
  @ViewChild(MatAccordion) accordion?: MatAccordion;

  ngOnInit(): void {
    // @ts-ignore
    this._scheduleService.array = JSON.parse(localStorage.getItem('Data'))
    // this._scheduleService.findTomorrowArray();
    // this._scheduleService.findTodayArray()
    // this._scheduleService.findOlderArray()
    // this._scheduleService.findWeekArray()
    // console.log(this._scheduleService.monthArray,"month")
    // console.log(this._scheduleService.current);
  }
  panelOpenState = false

  noteChanges(e: any,array:[]) {
    if(array == this._scheduleService.todayArray){
      this._scheduleService.todayArray[this._scheduleService.i].tNotes = e.target.value
    }
    // else if(array == this._scheduleService.tomorrowArray){
    //   this._scheduleService.tomorrowArray[this._scheduleService.i].tNotes = e.target.value
    // }else if(array == this._scheduleService.olderArray){
    //   this._scheduleService.olderArray[this._scheduleService.i].tNotes = e.target.value
    // }else if(array == this._scheduleService.weekArray){
    //   this._scheduleService.weekArray[this._scheduleService.i].tNotes = e.target.value
    // }
  }

  onChange(e:any,array:[]) {
    if(array == this._scheduleService.todayArray){
      this._scheduleService.todayArray[this._scheduleService.i].tDate = e.value
    }
    // else if(array == this._scheduleService.tomorrowArray){
    //   this._scheduleService.tomorrowArray[this._scheduleService.i].tDate = e.value
    // }else if(array == this._scheduleService.olderArray){
    //   this._scheduleService.olderArray[this._scheduleService.i].tDate = e.value
    // }else if(array == this._scheduleService.weekArray){
    //   this._scheduleService.weekArray[this._scheduleService.i].tDate = e.value
    // }
  }

  onDateChange(e: any) {
    this.dateValue = e.target.value;
  }

  selectCar(c:any,array:[]) {
    // if(array == this._scheduleService.tomorrowArray){
    //   this._scheduleService.tomorrowArray[this._scheduleService.i].tColor = c.value
    // }
    if(array == this._scheduleService.todayArray){
      this._scheduleService.todayArray[this._scheduleService.i].tColor = c.value
    }
    // else if(array == this._scheduleService.olderArray){
    //   this._scheduleService.olderArray[this._scheduleService.i].tColor = c.value
    // }else if(array == this._scheduleService.weekArray){
    //   this._scheduleService.weekArray[this._scheduleService.i].tColor = c.value
    // }
  }

  delete(array:[]) {
    if(array == this._scheduleService.todayArray){
      this.index = this._scheduleService.todayArray.find((i:any) => i.workSpaceId)
      this._scheduleService.todayArray.splice(this._scheduleService.i,1)
      this._scheduleService.array[this.index.workspace].task.splice(this._scheduleService.i,1)
    }
    // else if(array == this._scheduleService.tomorrowArray){
    //   this.index = this._scheduleService.tomorrowArray.find((i:any) => i.workSpaceId)
    //   this._scheduleService.tomorrowArray.splice(this._scheduleService.i,1)
    //   this._scheduleService.array[this.index.workspace].task.splice(this._scheduleService.i,1)
    // }else if(array == this._scheduleService.olderArray){
    //   this.index = this._scheduleService.olderArray.find((i:any) => i.workSpaceId)
    //   this._scheduleService.olderArray.splice(this._scheduleService.i,1)
    //   this._scheduleService.array[this.index.workspace].task.splice(this._scheduleService.i,1)
    // }else if(array == this._scheduleService.weekArray){
    //   this.index = this._scheduleService.weekArray.find((i:any) => i.workSpaceId)
    //   this._scheduleService.weekArray.splice(this._scheduleService.i,1)
    //   this._scheduleService.array[this.index.workspace].task.splice(this._scheduleService.i,1)
    // }
  }

  saveTask() {
    this.panel?.close();
    this.accordion?.closeAll();
    this._scheduleService.findTodayArray()
  }
}
