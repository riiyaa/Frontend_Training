import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class AppService {
  prefix = 'root'
  constructor() { }
  log(message:any){
    console.log(`${this.prefix} : ${message}`)
  }
  number:any = 20
}
