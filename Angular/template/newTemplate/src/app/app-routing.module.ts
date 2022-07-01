import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import {HomeComponent} from "./components/home/home.component";
import {UiElementComponent} from "./components/ui-element/ui-element.component";
import {DropdownComponent} from "./components/dropdown/dropdown.component";
import {TypographyComponent} from "./components/typography/typography.component";
import {FormComponent} from "./components/form/form.component";
import { ChartComponent } from './components/chart/chart.component';
import {TableComponent} from "./components/table/table.component";
import {IconComponent} from "./components/icon/icon.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'ui-element',component:UiElementComponent},
  {path:'button',component:ButtonComponent},
  {path:'dropdown',component:DropdownComponent},
  {path:'typography',component:TypographyComponent},
  {path:'form-element',component:FormComponent},
  {path:'chart',component:ChartComponent},
  {path:'table',component:TableComponent},
  {path:'icons',component:IconComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
