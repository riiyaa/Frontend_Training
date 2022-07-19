import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReusableComponentModule} from "../reusable-components/reusable-component.module";
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import {CarouselModule} from "ngx-owl-carousel-o";

const routes:Routes = [
  {path:'',component:PagesComponent,children:[
      {path:'',component:HomeComponent},
      {path:'contacts',component:ContactsComponent},
    ]}
]
@NgModule({
  declarations: [
    HomeComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ReusableComponentModule,
    RouterModule.forChild(routes),
    CarouselModule
  ]
})
export class PagesModule { }
