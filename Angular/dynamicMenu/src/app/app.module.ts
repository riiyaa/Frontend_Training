import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import { PolicyComponent } from './policy/policy.component';
import { LeaveComponent } from './leave/leave.component';
import { PayrollComponent } from './payroll/payroll.component';
import { HolidayComponent } from './holiday/holiday.component';
import { PasswordComponent } from './password/password.component';
import { ToggleReportComponent } from './toggle-report/toggle-report.component';
import { ToggleDashboardComponent } from './toggle-dashboard/toggle-dashboard.component';
import { TimeLogComponent } from './time-tracker/time-log/time-log.component';
import { TimeSheetComponent } from './time-tracker/time-sheet/time-sheet.component';
import { ExtraSheetComponent } from './time-tracker/extra-sheet/extra-sheet.component';
import {SalarySlipComponent} from "./payroll/salary-slip/salary-slip.component";
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TimeTrackerComponent,
    PolicyComponent,
    LeaveComponent,
    PayrollComponent,
    HolidayComponent,
    PasswordComponent,
    ToggleReportComponent,
    ToggleDashboardComponent,
    TimeLogComponent,
    TimeSheetComponent,
    ExtraSheetComponent,
    SalarySlipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
