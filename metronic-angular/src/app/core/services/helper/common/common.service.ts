import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isEdit: boolean = false;
  isUserOrRole : string = '';
  constructor() { }
}
