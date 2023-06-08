import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isOpenSidebar: boolean =false;
  isShowNavbar: boolean =false;
  constructor() { }
}
