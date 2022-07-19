import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {AuthServiceService} from "../../core/services/auth-service/auth-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public _service:AuthServiceService, private route:Router) { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    uname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("^(?=.*[a-zA-Z])[a-zA-Z0-9]+$")]),
    password:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
  })

  get f() { return this.loginForm.controls; }
  submitted = false;
  check(uname:any,pass:any){
    this.submitted = true;
    if(this.loginForm.valid){
      let output = this._service.checkUser(uname,pass);
      if(output){
        this._service.loggedIn = true
        this.route.navigate(['/admin']);
      }else {
        this.submitted = false
        this._service.loggedIn = false;
        this.loginForm.reset()
      }
    }
  }
}
