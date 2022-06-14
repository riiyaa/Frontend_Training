import {Component, OnInit, ViewChild} from '@angular/core';
import {AppServiceService} from "../../app-service.service";
import {MatAccordion, MatExpansionPanel} from "@angular/material/expansion";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  wId: any;
  tId: any;

  constructor(public _today : AppServiceService) { }
  @ViewChild(MatExpansionPanel) panel?: MatExpansionPanel;
  @ViewChild(MatAccordion) accordion?: MatAccordion;

  index:any;
  note:string='';
  dateValue:any;
  panelOpenState = false;
  taskId:any;
  date:any;
  ngOnInit(): void {
    this._today.findTodayArray();
  }

  noteChanges(e: any,id:any) {
    this._today.todayArray[this._today.i].tNotes = e.target.value;
    this.wId = this._today.array.findIndex((i:any)=> i.task.find((j:any)=> j.taskId == id))
    this.tId = this._today.array[this.wId].task.findIndex((j:any)=>j.taskId == id);
    localStorage.setItem('Data', JSON.stringify(this._today.array));
  }

  onChange(e:any,id:any) {
    this._today.todayArray[this._today.i].tDate = e.value
    this.wId = this._today.array.findIndex((i:any)=> i.task.find((j:any)=> j.taskId == id))
    this.tId = this._today.array[this.wId].task.findIndex((j:any)=>j.taskId == id);
    localStorage.setItem('Data', JSON.stringify(this._today.array));
  }

  onDateChange(e: any,id:any) {
    this.date = e.target.value
    this.dateValue = new Date(this.date);
    this.wId = this._today.array.findIndex((i:any)=> i.task.find((j:any)=> j.taskId == id))
    this.tId = this._today.array[this.wId].task.findIndex((j:any)=>j.taskId == id);
    localStorage.setItem('Data', JSON.stringify(this._today.array));
    return this.date,this.dateValue;
  }

  selectCar(c:any,id:any) {
    this._today.todayArray[this._today.i].tColor = c.value
    this.wId = this._today.array.findIndex((i:any)=> i.task.find((j:any)=> j.taskId == id))
    this.tId = this._today.array[this.wId].task.findIndex((j:any)=>j.taskId == id);
    localStorage.setItem('Data', JSON.stringify(this._today.array));
  }

  delete(id:any) {
    this._today.todayArray.splice(this._today.i,1)
    this.wId = this._today.array.findIndex((i:any)=> i.task.find((j:any)=> j.taskId == id))
    this.tId = this._today.array[this.wId].task.findIndex((j:any)=>j.taskId == id);
    localStorage.setItem('Data', JSON.stringify(this._today.array));
  }


  saveTask() {
    this.panel?.close();
    this.accordion?.closeAll();
    this._today.findTodayArray()
  }

}
