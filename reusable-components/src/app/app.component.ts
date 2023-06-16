import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusable-components';
  numbersOfData: any = ['one', 'two', 'three', 'four', 'five'];
  dummyData = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
  footerData='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  modalShow: boolean = false;
  column_heading: any = ['#', 'First', 'Last', 'Status'];
  all_row: any = [['1', 'Nick', 'Rods', '<span class="label label-inline label-light-primary font-weight-bold">Pending</span>'], ['2', 'Nick', 'Rods', '<span class="label label-inline label-light-success font-weight-bold">Approved</span>'], ['3', 'Nick', 'Rods', '<span class="label label-inline label-light-danger font-weight-bold">New</span>']];
  dark: boolean = false
  data: any = [
    {title:'Accordion1',content:'This is the first items accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.'},
    {title:'Accordion2',content:'This is the first items accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.'},
    {title:'Accordion3',content:'This is the first items accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.'}
  ];


  open(event:any){
    console.log(event)
  }


  openModal() {
    this.modalShow = !this.modalShow
  }

}
