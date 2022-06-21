import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com/comments'
  get = this.http.get(this.url)

}
