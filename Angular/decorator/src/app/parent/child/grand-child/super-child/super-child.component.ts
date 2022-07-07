import { Component, OnInit } from '@angular/core';
import {AppService} from "../../../../app.service";

@Component({
  selector: 'app-super-child',
  templateUrl: './super-child.component.html',
  styleUrls: ['./super-child.component.scss']
})
export class SuperChildComponent implements OnInit {

  constructor( public _app : AppService) { }

  ngOnInit(): void {
  }

}
