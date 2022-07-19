import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PagesComponent} from "./pages/pages.component";
import {ReusableComponentModule} from "./reusable-components/reusable-component.module";
import {HttpClientModule} from "@angular/common/http";
import {CarouselModule} from "ngx-owl-carousel-o";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminPanelModule} from "./admin-panel/admin-panel.module";


@NgModule({
    declarations: [
        AppComponent,
        PagesComponent,
        AdminPanelComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        ReusableComponentModule,
        HttpClientModule,
        RouterModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
      AdminPanelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
