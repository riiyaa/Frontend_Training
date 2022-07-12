import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HeaderService} from "../../core/header.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any = []
  product:any = []
  isSelected = 'all'
  constructor(public _service: HeaderService) { }

  ngOnInit(): void {
    this._service.getUrl.subscribe((data:any)=> {
      this.data = data
    })
      this.getProduct()
  }
  getProduct(){
    this._service.getUrl.subscribe((data:any)=> {
      this.product = data
    })
  }

  selected(type: any) {
    if(this.product.filter((i:any)=>i.filter.includes(type))){
        this.data = this.product.filter((i:any)=>i.filter.includes(type))
        this.isSelected = type
    }
  }
}
