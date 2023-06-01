import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./login/login.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {AuthComponent} from "./auth.component";


@NgModule({
  declarations: [
    LoginComponent,
    ErrorPageComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
