import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";
// import { Observable } from 'rxjs';
// import {AppServiceService} from "./app-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'callAPI';

  data:any;

  constructor(private http: HttpClient,private _service : AppService) {
  }
  ngOnInit() {
    this._service.get.subscribe(data => {
      this.data = data
    })
  }

}
