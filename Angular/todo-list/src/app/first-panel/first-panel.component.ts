import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from "../dialog/dialog.component";
import {AppServiceService} from "../app-service.service";

@Component({
  selector: 'app-first-panel',
  templateUrl: './first-panel.component.html',
  styleUrls: ['./first-panel.component.scss']
})
export class FirstPanelComponent implements OnInit {

  ngOnInit(): void {
  }
  animal: any = [];
  name: string | undefined;

  constructor(public dialog: MatDialog,private _appService:AppServiceService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: this.animal,
    });

    dialogRef.afterClosed().subscribe(result => {
      this._appService.workspace.push(result)
    });
  }
}
