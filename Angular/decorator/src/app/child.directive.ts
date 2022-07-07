import {Directive, SkipSelf} from '@angular/core';
import {AppService} from "./app.service";

@Directive({
  selector: '[appChild]'
})
export class ChildDirective {

  constructor(@SkipSelf() private _app : AppService) {
    if(_app){
      _app.prefix = 'child'
      _app.log('ndsjhdfcjhfcj')
    }
  }

}
