import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss']
})
export class HomeChildComponent implements OnInit {
  constructor(private route : ActivatedRoute) { }
  public nameId: any;

  ngOnInit(): void {
    this.nameId = this.route.snapshot.paramMap.get('id');
  }
  panelOpenState = false;
}
