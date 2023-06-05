import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-popup',
  templateUrl: './nav-popup.component.html',
  styleUrls: ['./nav-popup.component.scss']
})
export class NavPopupComponent implements OnInit {
  showNotification: number= 1;
  @Input() showDropdown = ''

  @HostListener('document:click', ['$event'])
  onPageClick(event:any) {
    console.log(event,this.showDropdown)
    // if( this.showDropdown!=''){
    //   const x = this.showDropdown
      if (!this.eRef.nativeElement.contains(event.target)) {
        console.log('mckjdmnkfj')
        // this.showDropdown=''
        // setTimeout(()=>{
        //   this.showDropdown=x
        // },100)
      }
    // }
  }

  constructor(public eRef: ElementRef) {
  }

  ngOnInit(): void {
  }

}
