import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() color:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
