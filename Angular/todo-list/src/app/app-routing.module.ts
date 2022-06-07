import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScheduleComponent} from "./first-panel/schedule/schedule.component";
import {TodayComponent} from "./first-panel/today/today.component";
import {WorkspaceComponent} from "./first-panel/workspace/workspace.component";
import {CardComponent} from "./first-panel/workspace/card/card.component";

const routes: Routes = [
  {path:'',component:WorkspaceComponent},
  {path:'workspace',component:WorkspaceComponent,},
  {path:'workspace/:num',component:CardComponent},
  {path:'schedule',component:ScheduleComponent},
  {path:'today',component:TodayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
