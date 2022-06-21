import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'templateDrivenForm';

  topics = ['Angular','React','Vue']

  submit(value: any) {
    console.log(value)
  }
}
