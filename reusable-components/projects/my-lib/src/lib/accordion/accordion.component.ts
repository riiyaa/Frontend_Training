import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input()items: any;
  itemSelect: any;

  constructor() { }

  ngOnInit(): void {
  }

  click(i: number) {
    this.itemSelect = this.itemSelect == i+1 ? 0 : i+1
  }
}
