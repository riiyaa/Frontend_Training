import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()title:any
  @Input()subTitle:any
  @Input()data:any
  @Input()footer:any

  constructor() { }

  ngOnInit(): void {
  }

}
