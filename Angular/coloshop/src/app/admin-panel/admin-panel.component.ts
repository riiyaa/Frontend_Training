import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
    localStorage.removeItem('username')
  }

  hide() {
    this.status = ! this.status
  }

  login() {

  }

}
