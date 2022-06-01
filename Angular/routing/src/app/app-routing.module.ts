import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {MobileComponent} from "./mobile/mobile.component";
import {TvComponent} from "./tv/tv.component";
import {MobileChildComponent} from "./mobile-child/mobile-child.component";
import {TvChildComponent} from "./tv-child/tv-child.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',children:[
      {path:'',component:AboutComponent},
      {path:'laptop',loadChildren:() => import('./laptop/laptop-routing.module').then(m => m.LaptopRoutingModule)},
      {path:'mobile',children:[
          {path:'',component:MobileComponent},
          {path:'mobile-child',component:MobileChildComponent}
        ]},
      {path:'tv',children:[
          {path:'',component:TvComponent},
          {path:'tv-child',component:TvChildComponent}
        ]},
    ]},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
