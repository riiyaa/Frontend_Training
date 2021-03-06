import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {AuthGuard} from "./core/guard/auth-guard";
import {ProductDetailsComponent} from "./admin-panel/product-details/product-details.component";

const routes: Routes = [
  {path:'',loadChildren:()=>import('./pages/pages.module').then(m =>m.PagesModule)},
  {path:'admin',canActivate:[AuthGuard],component:AdminPanelComponent},
  {path:'login',loadChildren:()=>import('./auth-pages/auth-pages.module').then(m =>m.AuthPagesModule)},
  {path:'details/:id', component:ProductDetailsComponent},
  {path:'addDetails',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
