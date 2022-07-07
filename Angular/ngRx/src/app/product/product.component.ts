import { Product } from './product.model';
import { AppState } from '../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any;

  constructor(private store: Store<AppState>) {
    this.products = this.store.select(state => state.product);
  }

  addProduct(name:any, price:any) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product> {
        name: name,
        price: price
      }
    });
  }

  ngOnInit() {
  }

}
