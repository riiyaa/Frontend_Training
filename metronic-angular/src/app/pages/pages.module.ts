import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgxDatatableModule} from "@tusharghoshbd/ngx-datatable";


@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        NgxDatatableModule
    ]
})
export class PagesModule { }
