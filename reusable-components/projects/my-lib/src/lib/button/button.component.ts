import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()color: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
