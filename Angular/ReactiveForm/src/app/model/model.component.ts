import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
  animations:[
    trigger('flip',[
      transition('back => front', [
        animate('1s 0s ease-in',
          keyframes([
            style({
              transform: 'perspective(400px) rotateY(-180deg)',
              offset: 0
            }),
          ])
        )
      ])
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
