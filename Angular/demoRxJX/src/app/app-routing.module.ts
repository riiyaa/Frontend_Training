import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Comp1Component} from "./comp1/comp1.component";
import {Comp2Component} from "./comp2/comp2.component";
import {SubjectComponent} from "./subject/subject.component";

const routes: Routes = [
  {path:'',component:Comp1Component},
  {path:'comp1' , component:Comp1Component},
  {path:'comp2', component:Comp2Component},
  {path:'comp3',component:SubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
