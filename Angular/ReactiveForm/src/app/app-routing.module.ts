import { NgModule } from '@angular/core';
import { RouterModule, Routes , PreloadingStrategy} from '@angular/router';
import {FormComponent} from "./form/form.component";
import {DetailsComponent} from "./details/details.component";
import { CustomPreloadingService } from './customPreloading.service';
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path:'',component:FormComponent},
  {path:'form' , component:FormComponent, data: {preload: true,state: 'form'}},
  {path:'login', component:LoginComponent},
  {path:'details',canActivate:[AuthGuard],component:DetailsComponent,data: { state: 'details' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule],
  providers: [ CustomPreloadingService ]
})
export class AppRoutingModule { }
