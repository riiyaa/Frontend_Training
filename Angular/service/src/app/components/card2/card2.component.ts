import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/appService/message.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {

  constructor(private _msgService:MessageService) { }
  item:any = {}
  ngOnInit(): void {
    this.item = this._msgService.product;
  }
  giveMsg() {
    this._msgService.alertMsg();
  }

}
