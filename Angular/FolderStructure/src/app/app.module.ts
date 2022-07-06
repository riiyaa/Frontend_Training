import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPagesComponent } from './auth-pages/auth-pages.component';
import { PagesComponent } from './pages/pages.component';
import { ReusableComponentComponent } from './reusable-component/reusable-component.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthPagesComponent,
        PagesComponent,
        ReusableComponentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    exports: [
        PagesComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
