import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesComponent } from './leaves/leaves.component';
import { LeaveReportComponent } from './leave-report/leave-report.component';



@NgModule({
  declarations: [
    LeavesComponent,
    LeaveReportComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeaveModule { }
