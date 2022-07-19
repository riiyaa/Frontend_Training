import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../../core/services/header.service";
import {animate, transition, trigger, useAnimation} from "@angular/animations";
import { zoomIn } from 'ng-animate';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations:[
      trigger('myAnimation',[
        transition('void => *', useAnimation(zoomIn, {
          delay:1
        }))
      ])
  ]
})
export class ProductsComponent implements OnInit {

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
    this.getProduct()
    if(type=='all'){
      this.data = this.product
      this.isSelected = 'all'
    }
    else if(this.product.filter((i:any)=>i.filter.includes(type))){
      this.data = this.product.filter((i:any)=>i.filter.includes(type))
      this.isSelected = type
    }
  }

}
