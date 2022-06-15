import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(private httpClient: HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    console.log("guard!");
    let imbdid = route.paramMap.get('imbdid');
    // @ts-ignore
    return this.httpClient.get('https://www.omdbapi.com/?i=' + imbdid + '&apikey=' + APIKEY).pipe(
      map(res => {
        // @ts-ignore
        if (res['Error']) {
          alert("Movie not found at guard!");
          return false;
        } else {
          return true;
        }
      }),
      catchError((err) => {
        return of(false);
      })
    );

  }

}
