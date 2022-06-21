import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { forbiddenNameValidator } from './validator';
import {PasswordValidator} from "./passwordValidator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'reactiveForm';

  constructor(private fb: FormBuilder) {
  }
  //FormBuilder
  // registrationForm = this.fb.group({
  //   username:['a',Validators.required],
  //   password:['',Validators.required],
  //   confirmPass:['',Validators.required]
  // })

  ngOnInit() {

  }
  // Normal FormGroup
  registrationForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3),forbiddenNameValidator]),
    email:new FormControl(''),
    agree: new FormControl(false),
    password: new FormControl('',Validators.required),
    confirmPass: new FormControl('',Validators.required)
  },{validators:PasswordValidator})



  submit(value:any) {
    console.log(value)
  }

  fillData() {
    console.log("123")
  }

  get f()
  {
    return this.registrationForm.controls;
  }

}
