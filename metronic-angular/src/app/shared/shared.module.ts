import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import { NavPopupComponent } from './nav-popup/nav-popup.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    NavPopupComponent,
    BottomNavbarComponent
  ],
    exports: [
        NavbarComponent,
        SidebarComponent,
        BottomNavbarComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
