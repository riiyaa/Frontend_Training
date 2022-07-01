import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ButtonsComponent} from "./buttons/buttons.component";
import {CardsComponent} from "./cards/cards.component";
import {HomeComponent} from "./home/home.component";
import {UtilitiesColorComponent} from "./utilities-color/utilities-color.component";
import {UtilitiesBorderComponent} from "./utilities-border/utilities-border.component";
import {UtilitiesOtherComponent} from "./utilities-other/utilities-other.component";
import {UtilitiesAnimationComponent} from "./utilities-animation/utilities-animation.component";
import {Error404Component} from "./error404/error404.component";
import {BlankComponent} from "./blank/blank.component";
import {ChartsComponent} from "./charts/charts.component";
import {TablesComponent} from "./tables/tables.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'',component:HomeComponent},
  {path:'home',component:AppComponent},
  {path:'buttons',component:ButtonsComponent},
  {path:'cards',component:CardsComponent},
  {path:'utilities-color',component:UtilitiesColorComponent},
  {path:'utilities-border',component:UtilitiesBorderComponent},
  {path:'utilities-other',component:UtilitiesOtherComponent},
  {path:'utilities-animation',component:UtilitiesAnimationComponent},
  {path:'error404',component:Error404Component},
  {path:'blank',component:BlankComponent},
  {path:'chart',component:ChartsComponent},
  {path:'table',component:TablesComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
