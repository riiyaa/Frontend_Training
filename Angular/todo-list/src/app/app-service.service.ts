import {Injectable, ViewChild} from '@angular/core';
import { locale } from 'moment';
import {__assign} from "tslib";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  i: any;
  router: any;
  constructor() { }
  object:any = ["Older","today","tomorrow","Sunday","Monday","Tuesday","Wednesday","Friday","Saturday","January","February","March","April","May","June","July","August","September","October","November","December"]
  workspace:any = [];
  array : any = []
  id:any
  todayArray:any = [];
  final:any={}
  // month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  taskId:any;
  current:Date = new Date();
  tomorrow:any = new Date(this.current.getTime() + (24 * 60 * 60 * 1000))
  cardId:string = '';
  cardIndex:any
  listName:any;
  newShow:boolean = true
  backShow:boolean = false

  makeId(length: number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  setBg = () => {
    if(Math.floor(Math.random() * 16777215).toString(16) != '943536'&& Math.floor(Math.random() * 16777215).toString(16) != 'd43c95' && Math.floor(Math.random() * 16777215).toString(16) !='36acd9' && Math.floor(Math.random() * 16777215).toString(16) !='464f43' && Math.floor(Math.random() * 16777215).toString(16) !='1b351f' && Math.floor(Math.random() * 16777215).toString(16) !='4c2ac' &&
      Math.floor(Math.random() * 16777215).toString(16) !='a9b517' &&  Math.floor(Math.random() * 16777215).toString(16) !='984cad' && Math.floor(Math.random() * 16777215).toString(16) !='d16575' && Math.floor(Math.random() * 16777215).toString(16) !='7b77a9' && Math.floor(Math.random() * 16777215).toString(16) !='e7141d' && Math.floor(Math.random() * 16777215).toString(16) !='3ccda2') {
      return Math.floor(Math.random() * 16777215).toString(16);
    }
    return
  }

  priority = [
    {index:0 ,value: 'lightblue', viewValue: 'Low'},
    {index:1 ,value: 'orange', viewValue: 'Medium'},
    {index:2 ,value: 'red', viewValue: 'high'}
  ]

  //find index of task
  select(i:number){
    this.i = i

  }

  findTodayArray() {
    this.todayArray=[]
    this.todayArray.push(this.array.map((i:any)=>i.task.filter((j:any)=>j.tDate=='today')).flat());
    this.todayArray = this.todayArray.flat();
  }

  addTask(name:any){
    this.cardIndex = this.array.findIndex((i:any) => i.id == this.listName)
    this.taskId = this.makeId(4);
    if(name!= ''){
      this.array[this.cardIndex].task.push({workspace:this.cardIndex,workSpaceId:this.listName , taskId:this.taskId , taskName:name , tColor:'lightblue' , tDate:'today' , tNotes:' '})
      localStorage.setItem('Data', JSON.stringify(this.array));
    }
    this.findTodayArray();
    this.findFinalArray();
  }
  taskChange(e:any){
    this.listName = e.target.value;
  }
  sortFunc(a:any, b:any) {
    let sortingArr = ["Older","today","tomorrow","Sunday","Monday","Tuesday","Wednesday","Friday","Saturday","January","February","March","April","May","June","July","August","September","October","November","December"];
    return sortingArr.indexOf(a.type) - sortingArr.indexOf(b.type);
  }
  lastDay = new Date(this.current.setDate(this.current.getDate() - this.current.getDay()+6));
  findFinalArray() {
    this.current = new Date()
    let firstDay = this.tomorrow
    this.final = {}
    for (let a of this.object) {
      this.array.map((i: any) => i.task.filter((j: any) => {
        if(j.tDate != 'today' && j.tDate != 'tomorrow' && j.tDate<this.current){
          if(a == 'Older'){
            if (this.final[a]?.length > 0) {
              this.final[a].push(j)
            } else {
              this.final[a] = [];
              this.final[a].push(j)
            }
          }
        }else if (j.tDate == a && j.tDate == 'today') {
          if (this.final[a]?.length > 0) {
            this.final[a].push(j)
          } else {
            this.final[a] = [];
            this.final[a].push(j)
          }
        }else if(j.tDate == a && j.tDate == 'tomorrow'){
          if (this.final[a]?.length > 0) {
            this.final[a].push(j)
          } else {
            this.final[a] = [];
            this.final[a].push(j)
          }
        }
        else if(j.tDate != 'today' && j.tDate != 'tomorrow' && (j.tDate<this.lastDay && j.tDate>firstDay) && j.tDate.toLocaleString('en-us', {weekday: 'long'}) == a){
          if (this.final[a]?.length > 0) {
            this.final[a].push(j)
          } else {
            this.final[a] = [];
            this.final[a].push(j)
          }
        }else if(j.tDate && j.tDate != 'today' && j.tDate != 'tomorrow' && j.tDate.toLocaleString('en-us', { month: 'long' })==a && j.tDate>this.current && j.tDate>this.lastDay){
          if (this.final[a]?.length > 0) {
            this.final[a].push(j)
          } else {
            this.final[a] = [];
            this.final[a].push(j)
          }
        }
        // this.final.sort(this.sortFunc())
      })).flat()
    }
  }
}
