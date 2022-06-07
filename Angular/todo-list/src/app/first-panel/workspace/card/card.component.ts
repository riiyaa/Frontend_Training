import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppServiceService} from "../../../app-service.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private route : ActivatedRoute,public _taskService:AppServiceService) { }
  public cardId : any;
  public index: any;
    // taskListArray : any = []

  // taskListArray : any = []
  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('num');
    this.index = this._taskService.array.findIndex((i: any) => i.id == this.cardId);
    console.log(this.index)
  }

  addTask(name:string){
    this._taskService.array[this.index].task.push(name);
    console.log("dfdggfg", this._taskService.array[this.index].task)
  }
  panelOpenState = false;

  priority: any[] = [
    {index:0 ,value: 'lightblue', viewValue: 'Low'},
    {index:1 ,value: 'orange', viewValue: 'Medium'},
    {index:2 ,value: 'red', viewValue: 'high'},
  ];
  selectValue:any

  selectCar(color:any) {
   this.selectValue = color.value
    if(this.selectValue=='red'){}
  }
}
