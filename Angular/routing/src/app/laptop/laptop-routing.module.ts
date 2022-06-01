import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LaptopChildComponent} from "./laptop-child/laptop-child.component";
import {LaptopComponent} from "./laptop.component";

const routes: Routes = [
  {path:'',component:LaptopComponent},
  {path:'laptop-child',component:LaptopChildComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaptopRoutingModule { }
