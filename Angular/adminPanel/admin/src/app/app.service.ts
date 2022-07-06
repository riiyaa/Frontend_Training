import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  logged = false
  constructor(public http : HttpClient,private toastr: ToastrService) { }

  url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
  getUrl = this.http.get(this.url);

  login(message:any):void{
    this.toastr.success(message);
  }

}
