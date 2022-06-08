import {Component, OnInit, ViewChild} from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
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
  public i:any
  selectedState:any
  date:any
  // taskListArray : any = []

  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('num');
    this.index = this._taskService.array.findIndex((i: any) => i.id == this.cardId);
  }

  @ViewChild('taskName') inputName: any;
  @ViewChild(MatExpansionPanel) panel?: MatExpansionPanel;

  addTask(name:string){
    this._taskService.cardId = this._taskService.makeId(4);
    this._taskService.array[this.index].task.push({workSpaceId:this.index , taskId:this._taskService.cardId , taskName:name , tColor:'' , tDate:'' , tNotes:''});
    this.inputName.nativeElement.value = ' ';
  }
  panelOpenState = false;

  priority: any[] = [
    {index:0 ,value: 'lightblue', viewValue: 'Low'},
    {index:1 ,value: 'orange', viewValue: 'Medium'},
    {index:2 ,value: 'red', viewValue: 'high'},
  ];
  //set color of border of particular task
  selectCar(color:any) {
    this._taskService.array[this.index].task[this.i].tColor = color.value
    // this.selectValue = this._taskService.array[this.index].task[this.i].tColor;
    // this._taskService.array[this.index].task[this.cardIndex].tColor = color.value
    // console.log(this._taskService.array[this.index].task[this.cardIndex].tColor)
  }
//Get index of list of task
  select(i:number){
    this.i = i
  }

  onChange($event: any) {
    this.selectedState = $event.value;
    this._taskService.array[this.index].task[this.i].tDate = this.selectedState
    console.log(this._taskService.array[this.index].task)
  }

  deleteTask() {
    this._taskService.array[this.index].task.splice(this.i,1)
  }

  saveTask() {
    this._taskService.current = new Date();
    if(this._taskService.array[this.index].task[this.i].tDate == 'today'){
      this.date = this._taskService.current;
    }else if(this._taskService.array[this.index].task[this.i].tDate == 'tomorrow'){
      this.date = new Date(new Date().getTime() + (24 * 60 * 60 * 1000))
    }else{
      this.onChange(event)
    }
    this.panel?.close();
  }

  noteChanges(e:any) {
    this._taskService.array[this.index].task[this.i].tNotes = e.target.value
    console.log(this._taskService.array[this.index].task[this.i].tNotes)
  }

  onDateChange(e:any) {
    this.date = e.target.value
  }
}
import {AppServiceService} from "../../../app-service.service";
