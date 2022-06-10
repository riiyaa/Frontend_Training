import {Injectable} from '@angular/core';
import { locale } from 'moment';
import {__assign} from "tslib";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  i: any;

  constructor() { }
  object:any = ["January","February","March","April","May","June","July","August","September","October","November","December","Older","today","tomorrow","Sunday","Monday","Tuesday","Wednesday","Friday","Saturday"]
  workspace:any = [];
  array : any = []
  id:any
  todayArray:any = [];
  final:any={}
  olderArray:any=[]
  month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  taskId:any;
  current:any = new Date();
  tomorrow:any = new Date(this.current.getTime() + (24 * 60 * 60 * 1000))
  cardId:string = '';
  cardIndex:any
  listName:any;

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
      Math.floor(Math.random() * 16777215).toString(16) !='a9b517' &&  Math.floor(Math.random() * 16777215).toString(16) !='984cad' && Math.floor(Math.random() * 16777215).toString(16) !='d16575' && Math.floor(Math.random() * 16777215).toString(16) !='7b77a9' && Math.floor(Math.random() * 16777215).toString(16) !='e7141d') {
      console.log(Math.floor(Math.random() * 16777215).toString(16),"white");
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
    this.cardIndex = this.array.findIndex((i:any) => i.name == this.listName)
    this.taskId = this.makeId(4);
    this.array[this.cardIndex].task.push({workspace:this.cardIndex,workSpaceId:this.listName , taskId:this.taskId , taskName:name , tColor:'' , tDate:'today' , tNotes:' '})
    this.findFinalArray()
    this.findTodayArray()
  }
  taskChange(e:any){
    this.listName = e.target.value;
  }

  lastDay = new Date(this.current.setDate(this.current.getDate() - this.current.getDay()+6));
  findFinalArray() {
    this.final = {}

    for (let a of this.object) {
      this.array.map((i: any) => i.task.filter((j: any) => {
        if (j.tDate == a) {
          if (this.final[a]?.length > 0) {
            this.final[a].push(j)
          } else {
            this.final[a] = [];
            this.final[a].push(j)
          }
        }else if(j.tDate != 'today' && j.tDate != 'tomorrow' && (j.tDate<this.lastDay && j.tDate>this.tomorrow && j.tDate>this.current) && j.tDate.toLocaleString('en-us', {weekday: 'long'}) == a){
          if (this.final[a]?.length > 0) {
            this.final[a].push(j)
          } else {
            this.final[a] = [];
            this.final[a].push(j)
          }
        }else if(j.tDate != 'today' && j.tDate != 'tomorrow' && j.tDate.toLocaleString('en-us', { month: 'long' })==a){
          if (this.final[a]?.length > 0) {
            this.final[a].push(j)
          } else {
            this.final[a] = [];
            this.final[a].push(j)
          }
        }else if(j.tDate != 'today' && j.tDate != 'tomorrow' && j.tDate<this.current){
          if(a == 'Older'){
            if (this.final[a]?.length > 0) {
              this.final[a].push(j)
            } else {
              this.final[a] = [];
              this.final[a].push(j)
            }
          }
        }
      })).flat()
    }
    console.log(this.final,"gfgfg",this.array,"gfcgfgv")
  }

  keys(){
    return Object.keys(this.final)
  }

}
