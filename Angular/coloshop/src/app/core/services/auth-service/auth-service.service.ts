import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  loggedIn = false
  checkUser(uname: any, pass: any) {
    if(uname == 'admin' && pass == 'admin123' ){
      localStorage.setItem('username','admin');
      return true
    }else { return false }
  }
}
