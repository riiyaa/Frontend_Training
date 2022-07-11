import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(public _app: AppService) { }

  ngOnInit(): void {
  }
  userDetails = new FormGroup({
    userId:new FormControl(''),
    title:new FormControl(''),
    body:new FormControl('')
  })
  save(value: any) {
    this._app.post(value).subscribe((result:any)=>{
      console.log(result)
    })
  }
}
