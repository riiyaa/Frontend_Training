import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {__assign} from "tslib";
import {AppService} from "../app.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(public _service:AppService,private router: Router) { }

  ngOnInit(): void {
    this._service.arrayIndex = undefined
  }

  update(i: any) {
    this.router.navigateByUrl('/home');
    this._service.arrayIndex = i
  }
}
