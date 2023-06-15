import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() column_heading: any = [];
  @Input() all_row: any = [];
  @Input() dark: any = false;

  constructor() { }

  ngOnInit(): void {
  }

}
