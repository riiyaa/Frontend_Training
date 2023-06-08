import { Component, OnInit } from '@angular/core';
import {HelperService} from "../core/services/helper/helper.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(public helper:HelperService) { }

  ngOnInit(): void {
  }

  protected readonly document = document;
}
