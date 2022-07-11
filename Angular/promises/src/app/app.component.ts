import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'promises';

  public apiUrl =
    "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";

  constructor(private httpClient: HttpClient) {}

  basic() {
    this.httpClient
      .get(this.apiUrl)
      .pipe(delay(1000))
      .subscribe(result => {
        console.log("Basic [1] ", result);
      });
    console.log("Basic [2]");
  }

  async toPromise() {
    await this.httpClient
      .get(this.apiUrl)
      .pipe(delay(1000))
      .toPromise()
      .then(result => {
        console.log("ToPromise [1]", result);
      });
      console.log("ToPromise [2]");
  }
}
