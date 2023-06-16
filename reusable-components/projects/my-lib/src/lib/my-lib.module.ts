import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TableComponent } from './table/table.component';
import { NavComponent } from './nav/nav.component';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';



@NgModule({
  declarations: [
    MyLibComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CheckboxComponent,
    DropdownComponent,
    TableComponent,
    NavComponent,
    AlertComponent,
    ModalComponent,
    AccordionComponent,
  ],
  imports: [
    NgForOf,
    NgClass,
    NgIf
  ],
  exports: [
    MyLibComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CheckboxComponent,
    DropdownComponent,
    TableComponent,
    NavComponent,
    AlertComponent,
    ModalComponent,
    AccordionComponent,
  ]
})
export class MyLibModule { }
