import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimeTrackerComponent} from "./time-tracker.component";
import {TimeTrackerRoutingModule} from "./time-tracker-routing.module";
import {TimeLogComponent} from "./time-log/time-log.component";
import {TimeSheetComponent} from "./time-sheet/time-sheet.component";
import {ExtraSheetComponent} from "./extra-sheet/extra-sheet.component";


@NgModule({
  declarations: [
    TimeTrackerComponent,
    TimeLogComponent,
    TimeSheetComponent,
    ExtraSheetComponent
  ],
  imports: [
    CommonModule,
    TimeTrackerRoutingModule
  ]
})
export class TimeTrackerModule { }
