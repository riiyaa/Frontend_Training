import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "./app.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public _service : AppService,private route:Router,public toast: ToastrService) {
  }
  title = 'admin';
  componentShow = false
  utilityShow = false
  pageShow = false
  messageShow = false
  alertShow = false
  personShow = false
  showModel = false
  status = false

  showComponent() {
    this.componentShow = !this.componentShow
    this.utilityShow = false
    this.pageShow = false
  }

  showUtility() {
    this.utilityShow = !this.utilityShow
    this.componentShow = false
    this.pageShow = false
  }

  showPages() {
    this.pageShow = !this.pageShow
    this.utilityShow = false
    this.componentShow = false
  }

  showMessage() {
    this.messageShow = !this.messageShow
    this.alertShow = false
  }

  showAlert() {
    this.alertShow = !this.alertShow
    this.messageShow = false
  }

  showPerson() {
    this.personShow = !this.personShow
  }

  modelShow() {
    this.showModel = ! this.showModel
  }

  hide() {
    this.status = ! this.status
  }

  login() {

  }

  back() {
    this._service.logged = false
    this.route.navigateByUrl('')
  }
  loginDashboard() {
    this.toast.success("Hello! You are successfully login")
    this._service.login("You are successfully login")
    // this.route.navigateByUrl('')
  }
}
