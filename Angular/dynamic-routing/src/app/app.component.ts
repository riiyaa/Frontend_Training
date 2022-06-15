import { Component,OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { BreadcrumbService , Breadcrumb} from 'angular-crumbs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dynamic-routing';
  constructor(private _titleService:Title,private _breadCrumbService : BreadcrumbService) {
  }

  ngOnInit(): void {
    this._breadCrumbService.breadcrumbChanged.subscribe(crumbs => {
      this._titleService.setTitle(AppComponent.createTitle(crumbs));
    })
  }

  private static createTitle(routesCollection:Breadcrumb[]){
    const title = 'Angular Demo';
    const titles = routesCollection.filter((route:any)=>route.displayName);

    if(!titles.length){return title;}

    const routeTitle = AppComponent.titleToString(titles);
    return `${routeTitle} ${title}`
  }

  private static titleToString(titles: any){
    return titles.reduce((prev:any,curr:any)=>{
      return `${curr.displayName}-${prev}`
    },'');
  }
}
