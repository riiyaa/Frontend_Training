import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-histroy',
  templateUrl: './histroy.component.html',
  styleUrls: ['./histroy.component.scss']
})
export class HistroyComponent implements OnInit {
//Get input of parent array
  @Input() array:any[] = [];
  constructor() {}
  ngOnInit(): void {
//get history in refresh
//       this.array = JSON.parse(localStorage.getItem('History')!);
//     this.addNewArray = this.array;
//     console.log(this.array);
  }
//Empty array in history and local storage
  @Output() addNewArray: any = new EventEmitter<any>();
  newArray() {
    this.array=[]
    this.addNewArray.emit(this.array);
    localStorage.removeItem('History');
  }
}
