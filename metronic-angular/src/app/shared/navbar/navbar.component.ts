import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpenDropdown = ''

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropDown(name: any) {
    this.isOpenDropdown = this.isOpenDropdown == name ? '' : name
  }
}
