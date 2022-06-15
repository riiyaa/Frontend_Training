import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  checkUserPass(uname: string, pass: string) {
    if(uname == 'admin' && pass == '123'){
      localStorage.setItem('username','admin');
      return true
    }else { return false }
  }
}
