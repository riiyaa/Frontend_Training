import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any>{

  constructor( private httpClient:HttpClient) { }

  resolve(route: ActivatedRouteSnapshot){
    let imbdid = route.paramMap.get('imbdid');

    // @ts-ignore
    return this.httpClient.get('http://www.omdbapi.com/?i='+imbdid+'&apikey='+APIKEY);
  }
}
