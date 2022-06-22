import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
  animations: [
    trigger('dialog', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', animate(5000))
    ])
  ]
})
export class ModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('myModal', {static: false}) modal!: ElementRef;
  username:any;
  password:any
  open(uname:any,pass:any) {
    this.username = uname
    this.password = pass
    this.modal.nativeElement.style.display = 'block';

  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
}
