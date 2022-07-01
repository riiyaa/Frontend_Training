import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private route : Router) { }
  selectShow = false
  dateShow = false
  messageShow = false
  bellShow = false
  profileShow = false
  elementShow = false
  formShow = false
  chartShow = false
  iconShow = false
  tableShow = false
  loginShow = false
  showLogin = false

  ngOnInit(): void {
  }

  select() {
    this.selectShow = !this.selectShow
    this.bellShow = this.messageShow = this.profileShow = false
  }

  message() {
    this.messageShow = !this.messageShow
    this.bellShow = this.selectShow = this.profileShow = false
  }
  bell(){
    this.bellShow = !this.bellShow
    this.selectShow = this.messageShow = this.profileShow = false
  }
  profile(){
    this.profileShow = !this.profileShow
    this.bellShow = this.messageShow = this.selectShow = false
  }
  element(){
    this.elementShow = !this.elementShow
  }
  form(){
    this.formShow = !this.formShow
  }
  chart() {
    this.chartShow = !this.chartShow
  }
  icon(){
    this.iconShow = !this.iconShow
  }
  table(){
    this.tableShow = !this.tableShow
  }
  login(){
    this.loginShow = !this.loginShow
  }
  userPage(){
    this.showLogin = true
    this.loginShow = false
  }

  back() {
    this.showLogin = false
    this.route.navigateByUrl('home')
  }
}
