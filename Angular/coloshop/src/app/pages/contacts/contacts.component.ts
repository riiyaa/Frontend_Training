import { Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare var google: any;
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  url: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.697149419326095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+Birle%C5%9Fik+Devletler!5e0!3m2!1str!2str!4v1533536693373";
  urlMap: SafeResourceUrl | undefined;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlMap= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
