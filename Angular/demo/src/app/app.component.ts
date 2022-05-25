import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo-App';
  dataContent = 90;

  items = ['item1', 'item2', 'item3', 'item4'];
  message: any;
  addItem(newItem: string) {
    this.items.push(newItem);
  }
  count = 0;
  parent($event:any) {
    console.log("parent called",this.count);
    console.log(this.title);
    this.count++
  }
}

