import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IncDec';
  Num:number = 0;
  Incre(){
    if(this.Num>=0) {
      this.Num += 1
    }
  }
  Decre(){
    if(this.Num >0){
      this.Num -= 1
    }
  }
  incDec(num:boolean){
      if(num){
        this.Num ++
      }else {
        if(this.Num >0) {
          this.Num --
        }
      }
  }
}
