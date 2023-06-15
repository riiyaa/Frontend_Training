import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() buttonName: any='';
  @Input() dropdownData: any='';
  open=false

  constructor() { }

  ngOnInit(): void {
  }

}
