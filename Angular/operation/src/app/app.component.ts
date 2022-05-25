import { Component } from '@angular/core';
import {first} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Operation';
  firstNum : any;
  secondNum : any;
  ans : any;
  operation(op:string){
    let numberValue1 = Number(this.firstNum);
    let numberValue2 = Number(this.secondNum);
      if(op == 'sum'){
        this.ans = numberValue1 + numberValue2;
      }else if(op == 'sub'){
        this.ans = numberValue1 - numberValue2;
      }else if(op =='mul'){
        this.ans = numberValue1 * numberValue2;
      }else {
        this.ans = numberValue1 / numberValue2;
      }
    }


  // sum(){
  //   console.log(this.numberValue1 + this.numberValue2)
  //   this.ans = this.numberValue1 + this.numberValue2
  // }
}
