import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorPageComponent} from "./auth/error-page/error-page.component";

const routes: Routes = [
  {
    path: '',
    loadChildren:()=>import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'pages',
    loadChildren:()=>import('../app/pages/pages.module').then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
