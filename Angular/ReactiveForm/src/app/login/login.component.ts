import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService} from "../app.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {ModelComponent} from '../model/model.component'
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
      ]),

      transition(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('600ms ease-in', style({ transform: 'translateX(100%)', 'opacity': 0 }))
      ])
    ]),
  ]
})
export class LoginComponent implements OnInit {

  constructor(public _service:AppService, private route:Router) { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    uname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("^(?=.*[a-zA-Z])[a-zA-Z0-9]+$")]),
    password:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
  })
  @ViewChild('modal', {static: false}) modal!: ModelComponent

  get f() { return this.loginForm.controls; }
  submitted = false;
  check(uname:any,pass:any){
    this.submitted = true;
    if(this.loginForm.valid){
      let output = this._service.checkUser(uname,pass);
      if(output){
        this._service.loggedIn = true
        this.route.navigate(['/details']);
      }else {
        this.submitted = false
        this._service.loggedIn = false;
        this.modal.open(uname,pass);
        this.loginForm.reset()
      }
    }
  }
}
