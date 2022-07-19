import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../../core/services/header.service";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  interval:any ;
  day:any = '03';
  hour:any = '15';
  min:any = '45';
  sec:any = '25'
  data:any = []

  constructor(public _service:HeaderService) {
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ],
    items:5
  }
  ngOnInit() {
    this.interval = setInterval(() => {
      this.sec--;
      if (this.sec == 0) {
        this.sec = '60'
        this.min--;
        if (this.min == 0) {
          this.min = '60'
          this.hour--;
          if (this.hour == 0) {
            clearInterval(this.interval)
          }
        }
      }
    }, 1000);
    this._service.getUrl.subscribe((data:any)=> {
      this.data = data
    });

  }

}
