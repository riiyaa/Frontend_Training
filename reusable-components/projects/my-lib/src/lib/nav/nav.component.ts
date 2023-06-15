import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'lib-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input()navItems: any;
  @Output() selectTab =new EventEmitter()
  select :any = 0
  @Input()navContent: any;

  constructor() { }

  ngOnInit(): void {
  }

  selectOne(i:any) {
    this.select=i
    this.selectTab.emit(i)
  }
}
