import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = false;

  creds = [
    {
      "email": "abc@abc.com",
      "password": "abc",
    },
    {
      "email": "testlogin",
      "password": "12345",
    }
    ,
    {
      "email": "",
      "password": "",
    }
  ]

  login(email:string, password:string){
    let status = this.creds.find(it => it.email === email && it.password === password);
    if(!status){
      this.isAuthenticated = false;
      return false;
    }
    else{
      // this.router.navigate(['pages']);
      this.isAuthenticated = true;
      return true;
    }
  }

  // logout() {
  //   this.isAuthenticated = false;
  // }

  isLoggedin() {
    return this.isAuthenticated;
  }
}
