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
  // taskListArray : any = []

  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('num');
    this.index = this._taskService.array.findIndex((i: any) => i.id == this.cardId);
    let data: any;
    // @ts-ignore
    data = JSON.parse(localStorage.getItem('Data'));
    this._taskService.array = data
  }

  @ViewChild('taskName') inputName: any;
  @ViewChild(MatExpansionPanel) panel?: MatExpansionPanel;
  @ViewChild(MatAccordion) accordion?: MatAccordion;

  addTask(name:string){
    this._taskService.cardId = this._taskService.makeId(4);
    if(name!= ''){
      this._taskService.array[this.index].task.push({workspace:this.index,workSpaceId:this.cardId , taskId:this._taskService.cardId , taskName:name , tColor:'lightblue' , tDate:'today' , tNotes:' '});
      this.inputName.nativeElement.value = ' ';
      // @ts-ignore
      let data = JSON.parse(localStorage.getItem("Data"));
      data[this.index].task.push({workspace:this.index,workSpaceId:this.cardId , taskId:this._taskService.cardId , taskName:name , tColor:'lightblue' , tDate:'today' , tNotes:' '});
      localStorage.setItem('Data', JSON.stringify(data));
    }
  }
  panelOpenState = false;

  //set color of border of particular task
  selectCar(color:any) {
    this._taskService.array[this.index].task[this._taskService.i].tColor = color.value;
    // @ts-ignore
    let data = JSON.parse(localStorage.getItem("Data"));
    data[this.index].task[this._taskService.i].tColor = color.value;
    localStorage.setItem('Data', JSON.stringify(data));
  }

  onChange($event: any) {
    this._taskService.array[this.index].task[this._taskService.i].tDate= $event.value;
    // @ts-ignore
    let data = JSON.parse(localStorage.getItem("Data"));
    data[this.index].task[this._taskService.i].tDate = $event.value
    localStorage.setItem('Data', JSON.stringify(data));
  }

  deleteTask() {
    this._taskService.array[this.index].task.splice(this._taskService.i,1);
    // @ts-ignore
    let data = JSON.parse(localStorage.getItem("Data"));
    data[this.index].task.splice(this._taskService.i,1)
    localStorage.setItem('Data', JSON.stringify(data));
  }

  saveTask() {
    this._taskService.current;
    this.panel?.close();
    this.accordion?.closeAll();
    if(this._taskService.array[this.index].task[this._taskService.i].tDate == 'today'){
      this.date = this._taskService.current;
      // @ts-ignore
      let data = JSON.parse(localStorage.getItem("Data"));
      data[this.index].task[this._taskService.i].tDate = 'today'
      localStorage.setItem('Data', JSON.stringify(data));
    }else if(this._taskService.array[this.index].task[this._taskService.i].tDate == 'tomorrow'){
      this.date = new Date(new Date().getTime() + (24 * 60 * 60 * 1000))
      // @ts-ignore
      let data = JSON.parse(localStorage.getItem("Data"));
      data[this.index].task[this._taskService.i].tDate = 'tomorrow'
      localStorage.setItem('Data', JSON.stringify(data));
    }else{
      this._taskService.array[this.index].task[this._taskService.i].tDate = this.date;
      // @ts-ignore
      let data = JSON.parse(localStorage.getItem("Data"));
      data[this.index].task[this._taskService.i].tDate = this.date
      localStorage.setItem('Data', JSON.stringify(data));
    }
    console.log(this._taskService.array[this.index].task)
  }

  noteChanges(e:any) {
    this._taskService.array[this.index].task[this._taskService.i].tNotes = e.target.value
    this.noteValue = this._taskService.array[this.index].task[this._taskService.i].tNotes
    // @ts-ignore
    let data = JSON.parse(localStorage.getItem("Data"));
    data[this.index].task[this._taskService.i].tNotes = e.target.value
    localStorage.setItem('Data', JSON.stringify(data));
  }

  onDateChange(e:any) {
    this.date = (e.target.value);
    return this.date
  }
}
import {AppServiceService} from "../../../app-service.service";
import {getLocaleMonthNames} from "@angular/common";
