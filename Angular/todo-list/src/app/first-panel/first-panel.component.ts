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
  index:any
  ngOnInit(): void {
    this.index = this._appService.array.findIndex((i: any) => i.id == this._appService.id);
    // console.log(this.index)
  }
  animal: any = [];
  name: string | undefined;

  constructor(public dialog: MatDialog,public _appService:AppServiceService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: this.animal,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null || result != undefined){
        this._appService.workspace.push(result)
        this._appService.id = this._appService.makeId(6);
        this._appService.array.push({
          name:result,
          id:this._appService.id,
          task:[],
          color:this._appService.setBg()});
      }
    });
  }


}


