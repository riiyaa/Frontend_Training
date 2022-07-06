import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private toast : ToastrService,private route: Router) { }

  ngOnInit(): void {
  }

  showSuccess(){
    this.toast.success("You are logIn successfully");
    this.route.navigateByUrl('')
  }

  click() {
    this.showSuccess()
  }
}
