import {Component, Host, Optional, Self, SkipSelf} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[AppService]
})
export class AppComponent {
  title = 'decorator';
  constructor( private _app: AppService) {

    if(this._app){
      this._app.prefix='ddd'
      _app.log('parent constructor');
    }

    this._app.number = 84975847
  }
}
