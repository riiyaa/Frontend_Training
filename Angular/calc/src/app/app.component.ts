import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //global declaration
  title = 'calc';
  input: string = '';
  result: string = '0';
  firstNum:string = '';
  operator :string = '';
  secondNum :string = '';
  flag:boolean = false;
  getResult:string|undefined;
  getInput:string|undefined;
  getArray: any=[]

  //PressNum function call when number are pressed
  pressNum(num:string){
   if(this.input[this.input.length-1] == '='){       //After equal both value empty
     this.input=''
     this.result=''
   }
    if(num == '.'){                               //dot validation
      if(!this.result.includes('.')){
      }else {return}
    }
   if(this.flag) {                                   //when operator pressed flag true
      this.result = ''
     this.result += num
     this.flag = false
   } else if (!this.flag) {
     if(this.result == '0'){
       this.result = ''
       this.result += num
     }else {
       this.result += num
     }
   }

  }
  //PressOp function call when operator are pressed
  pressOp(op:string){

    if(op != '='){                   //When operator is not equal
      if (this.flag) {
        this.input=this.input.slice(0,-1);
        this.input += op
      }else {
        if(this.input.includes('+') || this.input.includes('-') || this.input.includes('×') || this.input.includes('÷')||this.input.includes('%')){
          this.operator = this.input[this.input.length-1];
          this.firstNum = this.input.slice(0,-1);
          this.secondNum = this.result;
          if(this.operator == '+') {
            this.result = String(Number(this.firstNum) + Number(this.secondNum));
          }else if(this.operator == '-'){
            this.result = String(Number(this.firstNum) - Number(this.secondNum))
          }else if(this.operator == '×'){
            this.result = String(Number(this.firstNum) * Number(this.secondNum))
          }else if(this.operator == '÷'){
            this.result = String(Number(this.firstNum) / Number(this.secondNum))
          }else if(this.operator == '%'){
            this.result = String(Number(this.firstNum) % Number(this.secondNum))
          }
          this.getInput = this.input+this.secondNum;
          this.input =this.result + op
          this.getResult = this.result;
          this.flag = !this.flag
          this.getArray .push({getInput:this.input+this.secondNum,getResult:this.result})    //push into array
          localStorage.setItem("History", JSON.stringify(this.getArray));                    //store in loacl storage
        }else {
          this.input = this.result + op
          this.flag = true;
        }
      }
    }else {                                                          //When operator is equal
      if(this.input != ''){                                         //when display is not null
        if(this.input[this.input.length-1]=='='){                    //when click more than one time equal
          if(this.operator != undefined){
            this.input = this.result +" "+ this.operator +" "+ this.secondNum + " =";
            if(this.operator == '+') {
              this.result = String(Number(this.result) + Number(this.secondNum));
            }else if(this.operator == '-'){
              this.result = String(Number(this.result) - Number(this.secondNum))
            }else if(this.operator == '×'){
              this.result = String(Number(this.result) * Number(this.secondNum))
            }else if(this.operator == '÷'){
              this.result = String(Number(this.result) / Number(this.secondNum))
            }else if(this.operator == '%') {
              this.result = String(Number(this.result) % Number(this.secondNum))
            }
            this.getArray.push({getInput: this.input, getResult: this.result});                  //push in array
            localStorage.setItem("History", JSON.stringify(this.getArray));                      //store in local storage
          }
        }else {                                                            //When press equal on first time
          this.operator = this.input[this.input.length - 1];
          this.firstNum = this.input.slice(0, -1);
          this.secondNum = this.result;
          this.input = this.firstNum+" "+this.operator+" " +this.secondNum + ' ='
          if (this.operator == '+') {
            this.result = String(Number(this.firstNum) + Number(this.secondNum));
          } else if (this.operator == '-') {
            this.result = String(Number(this.firstNum) - Number(this.secondNum))
          } else if (this.operator == '×') {
            this.result = String(Number(this.firstNum) * Number(this.secondNum))
          } else if (this.operator == '÷') {
            this.result = String(Number(this.firstNum) / Number(this.secondNum))
          } else if (this.operator == '%') {
            this.result = String(Number(this.firstNum) % Number(this.secondNum))
          }
          this.getArray.push({getInput: this.input, getResult: this.result});                 //push in array
          localStorage.setItem("History", JSON.stringify(this.getArray));                     //store in localstorage
        }
      }
    }

  }
//When remove one element in display screen
  backspace() {
    if(this.result != ""){
      this.result=this.result.slice(0, -1);
      if(this.result.length == 0){
        this.result=this.result.slice(0, -1);
        this.result = "0"
      }
    }
  }
  //When clear only display screen
  clear(){
    this.result = '0'
  }
  //When clear both the screen
  allClear(){
    this.result = '0';
    this.input = ''
  }
//When clear history empty array
  clearItem($event: string) {
    this.getArray = []
  }
}

