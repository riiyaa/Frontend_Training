import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {
  @Input() color:string=''
  @Input() data:any[] = []
  selectButton: any;

  constructor() { }

  ngOnInit(): void {
  }

}
