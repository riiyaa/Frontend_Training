import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PagesComponent} from "./pages/pages.component";
import { TopNavComponent } from './reusable-components/top-nav/top-nav.component';
import {ReusableComponentModule} from "./reusable-components/reusable-component.module";
import {HttpClientModule} from "@angular/common/http";
import {CarouselModule} from "ngx-owl-carousel-o";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
