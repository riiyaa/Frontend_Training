import {Component, OnInit} from '@angular/core';
import {AppServiceService} from "../../app-service.service";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  constructor(public _service:AppServiceService) { }
  ngOnInit(): void {
    // @ts-ignore
    this._service.array = JSON.parse(localStorage.getItem('Data'))
  }
  colors = ['red','blue','green','purple','orange','yellow','grey'];
}
