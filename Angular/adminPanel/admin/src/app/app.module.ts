import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { BlankComponent } from './blank/blank.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ChartsComponent } from './charts/charts.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TablesComponent } from './tables/tables.component';
import { UtilitiesAnimationComponent } from './utilities-animation/utilities-animation.component';
import { UtilitiesBorderComponent } from './utilities-border/utilities-border.component';
import { UtilitiesColorComponent } from './utilities-color/utilities-color.component';
import { UtilitiesOtherComponent } from './utilities-other/utilities-other.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    BlankComponent,
    ButtonsComponent,
    CardsComponent,
    ChartsComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    TablesComponent,
    UtilitiesAnimationComponent,
    UtilitiesBorderComponent,
    UtilitiesColorComponent,
    UtilitiesOtherComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
