import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TdFormComponent } from './td-form/td-form.component';
import { RFormComponent } from './r-form/r-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PasswordPatternDirective } from './td-form/password-pattern.directive';

@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    RFormComponent,
    PasswordPatternDirective,
    PasswordPatternDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
