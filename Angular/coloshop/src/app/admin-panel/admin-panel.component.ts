import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../core/services/header.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";



@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  constructor(public _appService: HeaderService , public http : HttpClient, public route: Router) { }

  products:any = []

  ngOnInit(): void {
    this._appService.getUrl.subscribe((data:any)=> {
      this.products = data
      console.log(this.products)
    });
    // console.log(this.products,"fcdfdf")
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

  delete(index:any,id:any) {
    this.products.splice(index, 1);
    this._appService.deleteItem(id)
      .subscribe(response => {
        this.products = this.products.filter((item:any) => item.id !== id);
      });
  }

  edit(index:any) {
    this.route.navigate(['details',index]);
  }

  addProduct() {
    // this.route.navigate(['addDetails']);
      this._appService.add().subscribe((result:any)=>{
        this.ngOnInit()
        this.edit(result.id)
      })

  }
}
