import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import {GuardService} from "./guard.service";
import {ResolveService} from "./resolve.service";

const routes: Routes = [
  { path:'', redirectTo:'home',pathMatch:'full'},
  { path:'home', component: HomeComponent},
  {
    path:'details/:imbdid',
    component: DetailsComponent,
    canActivate:[GuardService],
    resolve:{
      movie:ResolveService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
