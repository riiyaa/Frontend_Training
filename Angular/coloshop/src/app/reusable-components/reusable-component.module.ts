import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { ProductsComponent } from './products/products.component';
import {TopNavComponent} from "./top-nav/top-nav.component";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NewsLetterComponent,
    ProductsComponent,
    TopNavComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NewsLetterComponent,
    ProductsComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ReusableComponentModule { }
