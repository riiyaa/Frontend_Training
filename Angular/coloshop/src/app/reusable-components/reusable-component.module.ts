import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NewsLetterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NewsLetterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ReusableComponentModule { }
