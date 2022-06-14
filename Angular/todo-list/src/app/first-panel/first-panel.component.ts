import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from "../dialog/dialog.component";
import {AppServiceService} from "../app-service.service";
import {flush} from "@angular/core/testing";
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-first-panel',
  templateUrl: './first-panel.component.html',
  styleUrls: ['./first-panel.component.scss']
})
export class FirstPanelComponent implements OnInit {
  currentRoute: any;
  // index:any
  ngOnInit(): void {
    if(localStorage.getItem("Dta") === null){
      localStorage.setItem("Data", JSON.stringify(this._appService.array));
    }else{
      // @ts-ignore
      this._appService.array = JSON.parse(localStorage.getItem('Data'));
    }
  }
  animal: any = [];
  // name: string | undefined;
  current = new Date()

  constructor(public dialog: MatDialog,public _appService:AppServiceService, private route:Router) {
    this.currentRoute = "Demo";
    this.route.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if(this.currentRoute == '/schedule'  || this.currentRoute == '/today'){
          this.click()
        }else {
          this.change()
        }
      }
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: this.animal,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null && result != ' '){
        this._appService.workspace.push(result)
        this._appService.id = this._appService.makeId(6);
        this._appService.array.push({
          name:result,
          id:this._appService.id,
          color:this._appService.setBg(),
          createdAt:this.current,
          task:[]});
      }
      localStorage.setItem("Data", JSON.stringify(this._appService.array));
    });
  }
  click() {
  this._appService.newShow = false
    this._appService.backShow = true
  }

  change() {
    this._appService.newShow = true;
    this._appService.backShow = false;
  }
}


