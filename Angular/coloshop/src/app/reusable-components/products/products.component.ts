import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../../core/services/header.service";
import {transition, trigger, useAnimation} from "@angular/animations";
import { zoomIn } from 'ng-animate';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations:[
      trigger('myAnimation',[
        transition('void => *', useAnimation(zoomIn, {
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
    if(this.product.filter((i:any)=>i.filter.includes(type))){
      this.data = this.product.filter((i:any)=>i.filter.includes(type))
      this.isSelected = type
    }
  }

}
