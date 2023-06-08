import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HelperService} from "../../core/services/helper/helper.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  isSelect = 1

  constructor(public helper:HelperService) { }

  ngOnInit(): void {
  }

  closeSide() {
    this.helper.common.isOpenSidebar= false
    document.body.classList.remove('overlay')
  }

  ngAfterViewInit() {
    let x = document.getElementById('kt_quick_panel');
    if(x){
      x.classList.add('right-0');
    }
  }

}
