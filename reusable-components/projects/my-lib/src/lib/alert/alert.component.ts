import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() color:any
  selected: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
