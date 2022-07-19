import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http : HttpClient) { }
  url  = 'http://localhost:3000/Data'
  getUrl = this.http.get(this.url)
  id:any
  deleteItem(id:any){
    return this.http.delete(this.url+'/'+id);
  }
  saveItem(id:any,data:any){
    console.log(data);
    return this.http.put(`${this.url}/${id}`, data);
  }
  add() {
    return this.http.post(this.url, {
      "id": this.id++,
      "title": "",
      "image": "assets/images/product_4.png",
      "price": null,
      "discountPrice": 0,
      "newProduct": false,
      "saleProduct": "",
      "favourites": false,
      "filter": []

    })
  }

}
