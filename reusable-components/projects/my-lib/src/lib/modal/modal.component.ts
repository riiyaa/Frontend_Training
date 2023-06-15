import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() showFooter: boolean = true;
  @Input() body: any;
  @Input() title: any;
  @Input() closeLabel: any = 'Close';
  @Input() saveLabel: any = 'Save Changes';
  @Output() closeModal = new EventEmitter<string>();
  @Output() saveModal = new EventEmitter<string>();

  constructor(private eRef: ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  onPageClick(targetElement: any) {
    if (this.eRef.nativeElement.contains(targetElement.target)) {
      if (targetElement.srcElement.id == 'exampleModalCenter') {
        this.closeModalPopup()
      }
    }
  }

  ngOnInit(): void {
  }

  closeModalPopup() {
    this.closeModal.emit();
  }

  saveModalPopup() {
    this.saveModal.emit();
  }

}
