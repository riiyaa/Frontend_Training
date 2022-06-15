import {Component, OnInit} from '@angular/core';
import {fader} from './app-animations'

// import { enableRipple } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    fader
  ]
})
export class AppComponent implements OnInit{
  title = 'breadCrumb';
  initialUrl: never | undefined;

  constructor() {
  }
  prepareRoute(outlet:any){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

  ngOnInit() {}

}
