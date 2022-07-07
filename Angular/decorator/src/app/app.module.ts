import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentDirective } from './parent.directive';
import { ChildDirective } from './child.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { GrandChildComponent } from './parent/child/grand-child/grand-child.component';
import { SuperChildComponent } from './parent/child/grand-child/super-child/super-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentDirective,
    ChildDirective,
    ParentComponent,
    ChildComponent,
    GrandChildComponent,
    SuperChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
