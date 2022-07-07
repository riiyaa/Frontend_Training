import {Component, Host, OnInit, Self, SkipSelf} from '@angular/core';
import {AppService} from "../../../app.service";

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss'],
  providers:[AppService]
})
export class GrandChildComponent implements OnInit {

  constructor(@Host() public _app: AppService) { }

  ngOnInit(): void {
  }

}
