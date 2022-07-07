import {Directive, Self} from '@angular/core';
import {AppService} from "./app.service";

@Directive({
  selector: '[appParent]',
  providers:[AppService]
})
export class ParentDirective {

  constructor(@Self() private _service : AppService,) {
    if(_service){
      this._service.prefix = 'parent'
      _service.log('Parent constructor')
    }
  }

}
