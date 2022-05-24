import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IncDec';
  Num:number = 0;
  Incre($event:any){
    this.Num +=1
  }
  Decre($event:any){
    this.Num += -1
  }
}
