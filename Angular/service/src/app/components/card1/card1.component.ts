import { Component, OnInit } from '@angular/core';
import {MessageService} from "../../appService/message.service";

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {

  constructor(private _msgService:MessageService) { }

  ngOnInit(): void {
  }
  giveMsg() {
    this._msgService.alertMsg();
  }
}
