import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  array= []
  loggedIn = false
  checkUser(uname: any, pass: any) {
    if((uname == 'admin1' && pass == '111') || (uname == 'admin2' && pass == '222') || (uname == 'admin3' && pass == '333') ){
      localStorage.setItem('username','admin');
      return true
    }else { return false }
  }
}
