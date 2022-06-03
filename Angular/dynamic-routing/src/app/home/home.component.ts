import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  array = [
    {id:'1',name:'ghfg'},
    {id:'2',name:'mjuu'},
    {id:'3',name:'kiuh'},
    {id:'4',name:'erhy'}
  ];

select(items:any) {
    this.route.navigate(['/home',items.id]);
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
}
