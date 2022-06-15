import {NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import {AuthGuard} from "./auth.guard";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeChildComponent } from './home/home-child/home-child.component';
import {BreadcrumbModule} from 'xng-breadcrumb';
// import { BreadcrumbComponent } from './breadCrumb/breadcrumb/breadcrumb.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoreComponent,
    HomeChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  constructor() {
  }

ngOnInit() {
}

}
