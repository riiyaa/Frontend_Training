import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { ActivatedRoute } from '@angular/router';
// import * as moment from 'moment';
// import { Moment } from 'moment';
//
// const moment = _moment;
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor(private route : ActivatedRoute,public _taskService:AppServiceService) { }

  public cardIndex: any;
  public cardId : any;
  public index: any;
  date:any
  noteValue:string=''
  dateValue:any
  // taskListArray : any = []

  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('num');
    this.index = this._taskService.array.findIndex((i: any) => i.id == this.cardId);
    // this.dateValue= new Date(this.date);
  }

  @ViewChild('taskName') inputName: any;
  @ViewChild(MatExpansionPanel) panel?: MatExpansionPanel;
  @ViewChild(MatAccordion) accordion?: MatAccordion;

  addTask(name:string){
    this._taskService.cardId = this._taskService.makeId(4);
    if(name!= ''){
      this._taskService.array[this.index].task.push({workspace:this.index,workSpaceId:this.cardId , taskId:this._taskService.cardId , taskName:name , tColor:'lightblue' , tDate:'today' , tNotes:' '});
      this.inputName.nativeElement.value = '';
      localStorage.setItem('Data', JSON.stringify(this._taskService.array));
    }
  }
  panelOpenState = false;

  //set color of border of particular task
  selectCar(color:any) {
    this._taskService.array[this.index].task[this._taskService.i].tColor = color.value;
    localStorage.setItem('Data', JSON.stringify(this._taskService.array));
  }

  onChange($event: any) {
    this._taskService.array[this.index].task[this._taskService.i].tDate= $event.value;
    localStorage.setItem('Data', JSON.stringify(this._taskService.array));
  }

  deleteTask() {
    this._taskService.array[this.index].task.splice(this._taskService.i,1);
    localStorage.setItem('Data', JSON.stringify(this._taskService.array));
  }

  saveTask() {
    this._taskService.current;
    this.panel?.close();
    this.accordion?.closeAll();
    if(this._taskService.array[this.index].task[this._taskService.i].tDate == 'today'){
      this.date = this._taskService.current;
      localStorage.setItem('Data', JSON.stringify(this._taskService.array));
    }else if(this._taskService.array[this.index].task[this._taskService.i].tDate == 'tomorrow'){
      this.date = new Date(new Date().getTime() + (24 * 60 * 60 * 1000))
      localStorage.setItem('Data', JSON.stringify(this._taskService.array));
    }else{
      this._taskService.array[this.index].task[this._taskService.i].tDate = this.date;
      localStorage.setItem('Data', JSON.stringify(this._taskService.array));
      console.log(this._taskService.array,"abc")
    }
  }

  noteChanges(e:any) {
    this._taskService.array[this.index].task[this._taskService.i].tNotes = e.target.value
    this.noteValue = this._taskService.array[this.index].task[this._taskService.i].tNotes
    localStorage.setItem('Data', JSON.stringify(this._taskService.array));
  }

  onDateChange(e:any) {
    this.date = (e.target.value);
    this.dateValue = new Date(this.date)
    console.log(this.dateValue,this.date)
    return this.date
  }
  localSelect(index: any) {
    this.dateValue = new Date(this._taskService.array[this.index].task[index].tDate);
    localStorage.setItem('Data', JSON.stringify(this._taskService.array));
  }
}
import {AppServiceService} from "../../../app-service.service";
import {getLocaleMonthNames} from "@angular/common";
