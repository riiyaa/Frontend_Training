import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }
  workspace:any = [];
  array : any = []
  id:number =0

  // index = this.array.findIndex((i: any) => i == this.id)
}
