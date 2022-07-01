import {AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TestChildComponent} from "./test-child/test-child.component";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit,AfterViewInit,AfterContentInit {
  @ViewChild('head')header: ElementRef | undefined;
  @ViewChild('counterChild')child: TestChildComponent | undefined;
  @ContentChild('content')childContent:ElementRef|undefined

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // console.log(this.header);
    // console.log(this.childContent)
    // @ts-ignore
    this.header.nativeElement.style.color = "#087543";
  }
  ngAfterContentInit() {
    // @ts-ignore
    this.childContent.nativeElement.style.color = "#d37c90"
  }

  inc() {
    this.child?.increment()
  }

  decre() {
    this.child?.decrement()
  }
}
