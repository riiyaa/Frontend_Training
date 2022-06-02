import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SalarySlipComponent} from "./salary-slip/salary-slip.component";


@NgModule({
  declarations: [SalarySlipComponent],
  imports: [
    CommonModule
  ]
})
export class PayrollModule { }
