import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }
  workspace:any = [];
  array : any = []
  id:any
  todayArray:any = []

  current:any;
  currentDate:any

  cardId:string = '';
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
    console.log(Math.floor(Math.random() * 16777215).toString(16))
    return Math.floor(Math.random() * 16777215).toString(16)
  }

  // addTask(name:string){
  //   this.cardId = this.makeId(4);
  //   this.array[this.index].task.push({workSpaceId:this.index , taskId:this._taskService.cardId , taskName:name , tColor:'' , tDate:'' , tNotes:''});
  // }
}
