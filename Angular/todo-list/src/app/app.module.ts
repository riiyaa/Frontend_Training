import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstPanelComponent } from './first-panel/first-panel.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ScheduleComponent } from './first-panel/schedule/schedule.component';
import { TodayComponent } from './first-panel/today/today.component';
import { WorkspaceComponent } from './first-panel/workspace/workspace.component';
import { CardComponent } from './first-panel/workspace/card/card.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    FirstPanelComponent,
    DialogComponent,
    ScheduleComponent,
    TodayComponent,
    WorkspaceComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
