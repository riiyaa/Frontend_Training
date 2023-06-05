import { Injectable } from '@angular/core';
import { HttpOptionsClass } from 'src/app/core/classes/httpOptions';
import { Mixin } from 'src/app/core/decorator/mixin';
import { environment } from 'src/environments/environment';

@Mixin([HttpOptionsClass])

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor() { }

}
