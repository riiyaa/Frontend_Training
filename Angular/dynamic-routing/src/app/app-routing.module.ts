import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {HomeChildComponent} from "./home-child/home-child.component";

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent,data:{breadcrumb: 'Home'}},
  {path:'home/:id',component:HomeChildComponent,data:{breadcrumb: 'HomeId'}},
  {path:'about',component:AboutComponent,data:{breadcrumb: 'About'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
