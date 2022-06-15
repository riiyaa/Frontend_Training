import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import {AuthGuard} from "./auth.guard";
import {HomeChildComponent} from "./home/home-child/home-child.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent,data:{animation:'isRight'}},
  {path:'home/home-child',component:HomeChildComponent},
  {path:'store',canActivate:[AuthGuard],component:StoreComponent,data:{animation: 'isLeft'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
