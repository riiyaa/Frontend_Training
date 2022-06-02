import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraSheetComponent } from './extra-sheet/extra-sheet.component';
import { TimeLogComponent } from './time-log/time-log.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { TimeTrackerComponent } from './time-tracker.component';

const routes: Routes = [
      {path:'',component:TimeTrackerComponent},
      {path:'time-log',component:TimeLogComponent},
      {path:'time-sheet',component:TimeSheetComponent},
      {path:'extra-sheet',component:ExtraSheetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTrackerRoutingModule { }
