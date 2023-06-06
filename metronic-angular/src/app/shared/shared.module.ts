import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import { NavPopupComponent } from './nav-popup/nav-popup.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    NavPopupComponent,
    BottomNavbarComponent,
    FooterComponent
  ],
    exports: [
        NavbarComponent,
        SidebarComponent,
        BottomNavbarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
