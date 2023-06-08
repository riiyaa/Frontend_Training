import {Component, Input, OnInit} from '@angular/core';
import {HelperService} from "../../core/services/helper/helper.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpenDropdown = ''
  showNotification = 1


  constructor(public helper:HelperService) { }

  ngOnInit(): void {
  }

  toggleDropDown(name: any) {
    this.isOpenDropdown = this.isOpenDropdown == name ? '' : name
  }

  openSidebar() {
    document.body.classList.add('overlay')
    this.helper.common.isOpenSidebar = true
    this.isOpenDropdown = ''
  }

  openNavbar() {
    document.body.classList.add('overlay')
    this.helper.common.isShowNavbar = !this.helper.common.isShowNavbar
    this.isOpenDropdown = ''
  }
}
