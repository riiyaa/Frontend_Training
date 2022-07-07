import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';
import {FormsModule} from "@angular/forms";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        SecondComponent,
        ParentComponent,
        ChildComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    exports: [
        ChildComponent,
        ParentComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
