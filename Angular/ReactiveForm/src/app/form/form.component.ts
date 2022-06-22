import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../app.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
      ]),

      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('600ms ease-in', style({ transform: 'translateX(-100%)', 'opacity': 0 }))
      ]),
      transition('* => void' ,[
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('600ms ease-in', style({ transform: 'translateX(-100%)', 'opacity': 0 }))
      ])
    ]),
  ]
})
export class FormComponent implements OnInit {

  constructor(private _formService: AppService) { }

  ngOnInit(): void {
  }
  submitted = false;


  onSubmit(val:any) {
    this.submitted = true;
      if(this.saveDetails.valid){
        // @ts-ignore
        this._formService.array.push(val)
        localStorage.setItem("Details", JSON.stringify(this._formService.array));
        this.saveDetails.reset();
        this.submitted = false
      }
  }

  saveDetails = new FormGroup({
    fName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("^(?=.*[a-zA-Z])[a-zA-Z0-9]+$")]),
    lName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("^(?=.*[a-zA-Z])[a-zA-Z0-9]+$")]),
    email:new FormControl('',[Validators.required,Validators.email]),
    zip:new FormControl('',[Validators.required,Validators.pattern('[0-9]{6}')]),
    gender:new FormControl('male',[Validators.required])
  })
  get f() { return this.saveDetails.controls; }
}
