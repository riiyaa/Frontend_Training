import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  alertMsg() {
    alert("Welcome component to the appService");
  }

  product = [{name:"gdcvghfc",id:"01"},{name:"ghfc",id:"02"},{name:"gujtfc",id:"03"},{name:"ryrft"},{id:"05"}]
}
