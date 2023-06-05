import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isOpenSidebar: boolean =false;
  constructor() { }
}
