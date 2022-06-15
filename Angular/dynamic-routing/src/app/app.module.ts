import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider'
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import { DailogComponent } from './dailog/dailog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";

import {BreadcrumbModule} from 'angular-crumbs'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HomeChildComponent,
    DailogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatSliderModule, DragDropModule, MatFormFieldModule, FormsModule, MatDialogModule, MatExpansionModule, MatButtonModule, MatInputModule, MatTabsModule,
    BreadcrumbModule, MatButtonModule, MatFormFieldModule, MatFormFieldModule, MatFormFieldModule, MatFormFieldModule, MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
