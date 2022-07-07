import {Component, Host, OnInit, Self, SkipSelf} from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers:[AppService]

})
export class ChildComponent implements OnInit {

  constructor(@Self() public _app : AppService) { }

  ngOnInit(): void {

  }

}
