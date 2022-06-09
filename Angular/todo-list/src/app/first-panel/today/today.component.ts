import {Component, OnInit, ViewChild} from '@angular/core';
import {AppServiceService} from "../../app-service.service";
import {MatAccordion, MatExpansionPanel} from "@angular/material/expansion";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  constructor(public _today : AppServiceService) { }
  @ViewChild(MatExpansionPanel) panel?: MatExpansionPanel;
  @ViewChild(MatAccordion) accordion?: MatAccordion;

  index:any;
  note:string='';
  dateValue:any;
  panelOpenState = false
  ngOnInit(): void {
  }

  noteChanges(e: any) {
    this._today.todayArray[this._today.i].tNotes = e.target.value
  }

  onChange(e:any) {
    this._today.todayArray[this._today.i].tDate = e.value
  }

  onDateChange(e: any) {
      this.dateValue = e.target.value;
  }

  selectCar(c:any) {
    this._today.todayArray[this._today.i].tColor = c.value
    console.log(this._today.todayArray[this._today.i].tColor)
  }

  delete() {
    this.index = this._today.todayArray.find((i:any) => i.workSpaceId)
    this._today.todayArray.splice(this._today.i,1)
    this._today.array[this.index.workspace].task.splice(this._today.i,1)
  }

  saveTask() {
    this.panel?.close();
    this.accordion?.closeAll();
    console.log(this._today.todayArray)
   this._today.findTodayArray()
  }
}
