import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PolicyComponent} from "./policy/policy.component";
import {LeaveComponent} from "./leave/leave.component";
import {PayrollComponent} from "./payroll/payroll.component";
import {HolidayComponent} from "./holiday/holiday.component";
import {PasswordComponent} from "./password/password.component";
import {ToggleReportComponent} from "./toggle-report/toggle-report.component";
import {ToggleDashboardComponent} from "./toggle-dashboard/toggle-dashboard.component";
import {SalarySlipComponent} from "./payroll/salary-slip/salary-slip.component";
import {LeavesComponent} from "./leave/leaves/leaves.component";
import {LeaveReportComponent} from "./leave/leave-report/leave-report.component";
import {TimeTrackerComponent} from "./time-tracker/time-tracker.component";
import {TimeLogComponent} from "./time-tracker/time-log/time-log.component";
import {TimeSheetComponent} from "./time-tracker/time-sheet/time-sheet.component";
import {ExtraSheetComponent} from "./time-tracker/extra-sheet/extra-sheet.component";


const routes: Routes = [
  {path:'time-tracker',component:TimeTrackerComponent,children:[
      {path: 'time-log',component: TimeLogComponent},
      {path: 'time-sheet',component: TimeSheetComponent},
      {path: 'extra-sheet',component: ExtraSheetComponent}
    ]},
  {path:'policy',component:PolicyComponent},
  {path:'leave',component:LeaveComponent,children:[
      {path: 'leaves',component: LeavesComponent},
      {path: 'leave-report',component: LeaveReportComponent}
    ]},
  {path:'payroll',component:PayrollComponent,children:[
      {path:'salary-slip',component:SalarySlipComponent}
    ]},
  {path:'holiday',component:HolidayComponent},
  {path:'password',component:PasswordComponent},
  {path:'toggle-report',component:ToggleReportComponent},
  {path:'toggle-dashboard',component:ToggleDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
