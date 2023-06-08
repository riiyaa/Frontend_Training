import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import { NavPopupComponent } from './nav-popup/nav-popup.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";




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
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule
  ]
})
export class SharedModule { }
