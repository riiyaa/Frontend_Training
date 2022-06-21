import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import {CustomPreloadingService} from "./customPreloading.service";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from "@angular/material/button";
import { ModelComponent } from './model/model.component';
import {MatTableModule} from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from "@angular/material/sort";
import {MatDividerModule} from "@angular/material/divider";
import {MatRadioModule} from "@angular/material/radio";
// import {MatTableModule} from "@angular/material/table";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailsComponent,
    LoginComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatDividerModule,
    MatRadioModule
  ],
  providers: [CustomPreloadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
