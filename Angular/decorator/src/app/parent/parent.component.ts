import {Component, OnInit, Self, SkipSelf} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  // providers:[AppService]
})
export class ParentComponent implements OnInit {

  constructor( public _app : AppService) { }

  ngOnInit(): void {

  }

}
