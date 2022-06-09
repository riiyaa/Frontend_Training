import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  i: any;

  constructor() { }
  workspace:any = [];
  array : any = []
  id:any
  todayArray:any = [];
  tomorrowArray:any = []
  dateArray:any = []
  taskId:any
  current:any;
  cardId:string = '';
  cardIndex:any
  listName:any

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
    if(Math.floor(Math.random() * 16777215).toString(16) != '943536'&& Math.floor(Math.random() * 16777215).toString(16) != 'd43c95' && Math.floor(Math.random() * 16777215).toString(16) !='36acd9') {
      console.log(Math.floor(Math.random() * 16777215).toString(16),"white")
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

  findTomorrowArray(){
    this.tomorrowArray = [];
    this.tomorrowArray.push(this.array.map((i:any)=>i.task.filter((j:any)=>j.tDate == 'tomorrow')).flat());
    this.tomorrowArray = this.tomorrowArray.flat();
  }

  addTask(name:any){
    this.cardIndex = this.array.findIndex((i:any) => i.name == this.listName)
    this.taskId = this.makeId(4);
    this.array[this.cardIndex].task.push({workspace:this.cardIndex,workSpaceId:this.listName , taskId:this.taskId , taskName:name , tColor:'' , tDate:'today' , tNotes:' '})
    console.log(this.cardIndex,this.array)
    this.findTodayArray();
  }
  taskChange(e:any){
    this.listName = e.target.value;
  }
}
