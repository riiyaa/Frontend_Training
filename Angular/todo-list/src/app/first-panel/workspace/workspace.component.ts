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
  }
  colors = ['red','blue','green','purple','orange','yellow','grey'];
}
