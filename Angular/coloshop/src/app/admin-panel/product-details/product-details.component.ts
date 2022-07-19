import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HeaderService} from "../../core/services/header.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,public _appService: HeaderService,private routes: Router) { }

  itemId:any;
  products: any= [];
  title:any
  index:any
  loginForm:any='';

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id')

    this._appService.getUrl.subscribe((data:any)=> {
      console.log(data);
      this.products = data
      this.index = this.products.findIndex((data:any)=> data.id == this.itemId)
      console.log(this.index)

      this.loginForm = {
        editTitle: this.products[this.index].title,
        image: this.products[this.index].image,
        price:this.products[this.index].price,
        newP:this.products[this.index].newProduct,
        discount:this.products[this.index].discountPrice,
        sale:this.products[this.index].saleProduct,
        category:this.products[this.index].filter
      }
    });
  }


  saveDetails(){
    if(this.loginForm.newP == 'true'){ this.loginForm.newP = true}
    else {this.loginForm.newP = false}
    this.products[this.index].title = this.loginForm.editTitle;
    this.products[this.index].image = this.loginForm.image;
    this.products[this.index].price = this.loginForm.price;
    this.products[this.index].newProduct = this.loginForm.newP;
    this.products[this.index].discountPrice = this.loginForm.discount;
    this.products[this.index].saleProduct = this.loginForm.sale;
    this.products[this.index].filter = this.loginForm.category;
    this.products[this.index].favourites = false
    this._appService.saveItem(this.itemId,this.products[this.index]).subscribe((result:any)=> {
      console.log(result)
    })
    this.routes.navigate(['admin']);
  }

  onChange(e: any) {
    if (!this.products[this.index]?.filter.includes(e.value) && e.checked) {
      this.products[this.index]?.filter.push(e.value)
    }
    if (this.products[this.index]?.filter.includes(e.value) && !e.checked) {
      let temp_index = this.products[this.index]?.filter.indexOf(e.value)
      this.products[this.index]?.filter.splice(temp_index, 1)
    }
  }
}
