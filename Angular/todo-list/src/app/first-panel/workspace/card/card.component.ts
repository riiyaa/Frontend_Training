import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { ActivatedRoute } from '@angular/router';
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
  }

  @ViewChild('taskName') inputName: any;
  @ViewChild(MatExpansionPanel) panel?: MatExpansionPanel;
  @ViewChild(MatAccordion) accordion?: MatAccordion;

  addTask(name:string){
    this._taskService.cardId = this._taskService.makeId(4);
    if(name!= ''){
      this._taskService.array[this.index].task.push({workspace:this.index,workSpaceId:this.cardId , taskId:this._taskService.cardId , taskName:name , tColor:'' , tDate:'' , tNotes:' '});
      this.inputName.nativeElement.value = ' ';
    }
  }
  panelOpenState = false;

  //set color of border of particular task
  selectCar(color:any) {
    this._taskService.array[this.index].task[this._taskService.i].tColor = color.value
    // this.selectValue = this._taskService.array[this.index].task[this.i].tColor;
    // this._taskService.array[this.index].task[this.cardIndex].tColor = color.value
    // console.log(this._taskService.array[this.index].task[this.cardIndex].tColor)
  }

  onChange($event: any) {
    this._taskService.array[this.index].task[this._taskService.i].tDate= $event.value;
  }

  deleteTask() {
    this._taskService.array[this.index].task.splice(this._taskService.i,1)
  }

  saveTask(a:any) {
    this._taskService.current = new Date();
    this.panel?.close();
    this.accordion?.closeAll();
    if(this._taskService.array[this.index].task[this._taskService.i].tDate == 'today'){
      this.date = this._taskService.current;
    }else if(this._taskService.array[this.index].task[this._taskService.i].tDate == 'tomorrow'){
      this.date = new Date(new Date().getTime() + (24 * 60 * 60 * 1000))
    }else{
      // this.onChange(event);
      // console.log(this.onChange(event))
      this._taskService.array[this.index].task[this._taskService.i].tDate = this.date
    }
    console.log(this._taskService.array[this.index].task)
  }

  noteChanges(e:any) {
    this._taskService.array[this.index].task[this._taskService.i].tNotes = e.target.value
    console.log(this._taskService.array[this.index].task[this._taskService.i].tNotes)
    this.noteValue = this._taskService.array[this.index].task[this._taskService.i].tNotes
  }

  onDateChange(e:any) {
    this.date = (e.target.value);
    return this.date
  }
}
import {AppServiceService} from "../../../app-service.service";
import {getLocaleMonthNames} from "@angular/common";
