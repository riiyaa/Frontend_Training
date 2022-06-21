import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.scss']
})
export class RFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reactive = new FormGroup({
    mail:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    pass:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  onSubmit(val:any) {
    if(this.reactive.valid){
      console.log(val)
    }
    this.reactive.reset()
  }
}
