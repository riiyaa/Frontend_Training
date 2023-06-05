import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { CommonService } from './common/common.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  http: any;
  common: any;

  constructor( public _http: HttpService, public _common: CommonService)  {
    this.http = _http;
    this.common = _common;
   }
}
