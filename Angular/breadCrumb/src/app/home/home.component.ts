import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../my-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MyServiceService]
})
export class HomeComponent implements OnInit {

  msg:string = ''

  constructor(private _service : MyServiceService, private route:Router) { }
  ngOnInit(): void {
  }
  name = 'Hello Home'
  check(uname:string,pass:string){
    let output = this._service.checkUserPass(uname,pass);
    if(output){
      this.route.navigate(['/store']);
    }else {
      this.msg =  'Invalid Username and Password'
    }
  }
}
