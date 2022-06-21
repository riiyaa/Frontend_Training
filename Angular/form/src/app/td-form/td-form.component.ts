import { Component, OnInit } from '@angular/core';
// import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(val:any) {
    if(val.valid){
      console.log(val.value)
    }
  }
}
