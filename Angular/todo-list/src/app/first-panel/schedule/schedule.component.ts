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
  date: any;

  constructor(public _scheduleService : AppServiceService) { }
  @ViewChild(MatExpansionPanel) panel?: MatExpansionPanel;
  @ViewChild(MatAccordion) accordion?: MatAccordion;

  ngOnInit(): void {
    // @ts-ignore
    this._scheduleService.final = JSON.parse(localStorage.getItem('Data'))
    this._scheduleService.findFinalArray();
  }
  panelOpenState = false
  wId:any;
  tId:any

  noteChanges(e: any,id:any) {
    this.wId = this._scheduleService.array.findIndex((i:any)=> i.task.find((j:any)=> j.taskId == id));
    this.tId = this._scheduleService.array[this.wId].task.findIndex((j:any)=>j.taskId == id);
    this._scheduleService.array[this.wId].task[this.tId].tNotes = e.target.value
    localStorage.setItem('Data', JSON.stringify(this._scheduleService.array));
  }

  onChange(e:any,id:any) {
    this.wId = this._scheduleService.array.findIndex((i:any)=> i.task.find((j:any)=> j.taskId == id));
    this.tId = this._scheduleService.array[this.wId].task.findIndex((j:any)=>j.taskId == id);
    this._scheduleService.array[this.wId].task[this.tId].tDate = e.value
    localStorage.setItem('Data', JSON.stringify(this._scheduleService.array));
  }

  onDateChange(e: any,id:any) {
    this.dateValue = e.target.value;
    this.wId = this._scheduleService.array.findIndex((i:any)=> i.task.find((j:any)=> j.taskId == id));
    this.tId = this._scheduleService.array[this.wId].task.findIndex((j:any)=>j.taskId == id);
    this._scheduleService.array[this.wId].task[this.tId].tDate = this.dateValue
    localStorage.setItem('Data', JSON.stringify(this._scheduleService.array));
  }

  selectCar(c:any,id:any) {
    this.wId = this._scheduleService.array.findIndex((i:any)=> i.task.find((j:any)=> j.taskId == id));
    this.tId = this._scheduleService.array[this.wId].task.findIndex((j:any)=>j.taskId == id);
    this._scheduleService.array[this.wId].task[this.tId].tColor = c.value
    localStorage.setItem('Data', JSON.stringify(this._scheduleService.array));
  }

  delete(id:any){
    this.wId = this._scheduleService.array.findIndex((i:any)=> i.task.find((j:any)=> j.taskId == id));
    this.tId = this._scheduleService.array[this.wId].task.findIndex((j:any)=>j.taskId == id);
    this._scheduleService.array[this.wId].task.splice(this.tId,1);
    this._scheduleService.findFinalArray()
    localStorage.setItem('Data', JSON.stringify(this._scheduleService.array));
  }

  saveTask() {
    this.panel?.close();
    this.accordion?.closeAll();
    this._scheduleService.findFinalArray()
  }

  schedule(index:any,id:any) {
    this.wId = this._scheduleService.array.findIndex((i:any)=> i.task.find((j:any)=> j.taskId == id));
    this.tId = this._scheduleService.array[this.wId].task.findIndex((j:any)=>j.taskId == id);
    this.date = new Date(this._scheduleService.array[this.wId].task[this.tId].tDate)
    localStorage.setItem('Data',JSON.stringify(this._scheduleService.array))
  }

  // checkValue(name:any){
  //   this._scheduleService.object.some(name)
  // }
}
