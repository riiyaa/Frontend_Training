import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { CommonService } from './common/common.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  http: HttpService;
  common: CommonService;

  constructor( http: HttpService, common: CommonService)  {    
    this.http = http;
    this.common = common;
   }
}
