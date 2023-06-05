import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss']
})
export class BottomNavbarComponent implements OnInit {
  isSelect: number = 1;
  showMenu: boolean = false;
  dashboardArray:any = [
    {name:'Dashboard',isChild:false,childArray:[]},
    {name:'Application',isChild:false,childArray:[]}
  ]
  featuresArray:any = [
    {name:'Bootstrap',isChild:true,childArray:[
        {name:'Typography',isSubChild:false,subChildArray:[]},
        {name:'Buttons',isSubChild:false,subChildArray:[]},
        {name:'Buttons Group',isSubChild:false,subChildArray:[]},
        {name:'Dropdown',isSubChild:false,subChildArray:[]},
        {name:'Nav',isSubChild:false,subChildArray:[]},
        {name:'Tables',isSubChild:false,subChildArray:[]},
        {name:'Progress',isSubChild:false,subChildArray:[]},
        {name:'Modal',isSubChild:false,subChildArray:[]},
        {name:'Alerts',isSubChild:false,subChildArray:[]},
        {name:'Popover',isSubChild:false,subChildArray:[]},
        {name:'Tooltip',isSubChild:false,subChildArray:[]},
      ]},
    {name:'Custom',isChild:true,childArray:[
        {name:'Utilities',isSubChild:false,subChildArray:[]},
        {name:'Accordions',isSubChild:false,subChildArray:[]},
        {name:'Label',isSubChild:false,subChildArray:[]},
        {name:'Pulse',isSubChild:false,subChildArray:[]},
        {name:'Line Tabs',isSubChild:false,subChildArray:[]},
        {name:'Advance Navigations',isSubChild:false,subChildArray:[]},
        {name:'Timeline',isSubChild:false,subChildArray:[]},
        {name:'Pagination',isSubChild:false,subChildArray:[]},
        {name:'Symbol',isSubChild:false,subChildArray:[]},
        {name:'Spinners',isSubChild:false,subChildArray:[]},
        {name:'Iconbox',isSubChild:false,subChildArray:[]},
        {name:'Callout',isSubChild:false,subChildArray:[]},
        {name:'Ribbons',isSubChild:false,subChildArray:[]},
      ]},
    {name:'Icons',isChild:true,childArray:[
        {name:'SVG Icons',isSubChild:false,subChildArray:[]},
        {name:'Custom Icons',isSubChild:false,subChildArray:[]},
        {name:'Flaticon',isSubChild:false,subChildArray:[]},
        {name:'fontawesome 5',isSubChild:false,subChildArray:[]},
        {name:'Lineawesome',isSubChild:false,subChildArray:[]},
        {name:'Sociocons',isSubChild:false,subChildArray:[]},
      ]},
    {name:'Cards',isChild:true,childArray:[
        {name:'General cards',isSubChild:false,subChildArray:[]},
        {name:'Stacked cards',isSubChild:false,subChildArray:[]},
        {name:'Tabbed cards',isSubChild:false,subChildArray:[]},
        {name:'Draggable cards',isSubChild:false,subChildArray:[]},
        {name:'Cards Tools',isSubChild:false,subChildArray:[]},
        {name:'Sticky cards',isSubChild:false,subChildArray:[]},
        {name:'Stretched cards',isSubChild:false,subChildArray:[]},
      ]},
    {name:'Widgets',isChild:true,childArray:[
        {name:'Typography',isSubChild:false,subChildArray:[]},
        {name:'Buttons',isSubChild:false,subChildArray:[]},
        {name:'Buttons Group',isSubChild:false,subChildArray:[]},
        {name:'Dropdown',isSubChild:false,subChildArray:[]},
        {name:'Nav',isSubChild:false,subChildArray:[]},
        {name:'Tables',isSubChild:false,subChildArray:[]},
        {name:'Progress',isSubChild:false,subChildArray:[]},
        {name:'Modal',isSubChild:false,subChildArray:[]},
        {name:'Alerts',isSubChild:false,subChildArray:[]},
        {name:'Popover',isSubChild:false,subChildArray:[]},
        {name:'Tooltip',isSubChild:false,subChildArray:[]},
      ]},
    {name:'Calender',isChild:true,childArray:[
        {name:'Typography',isSubChild:false,subChildArray:[]},
        {name:'Buttons',isSubChild:false,subChildArray:[]},
        {name:'Buttons Group',isSubChild:false,subChildArray:[]},
        {name:'Dropdown',isSubChild:false,subChildArray:[]},
        {name:'Nav',isSubChild:false,subChildArray:[]},
        {name:'Tables',isSubChild:false,subChildArray:[]},
        {name:'Progress',isSubChild:false,subChildArray:[]},
        {name:'Modal',isSubChild:false,subChildArray:[]},
        {name:'Alerts',isSubChild:false,subChildArray:[]},
        {name:'Popover',isSubChild:false,subChildArray:[]},
        {name:'Tooltip',isSubChild:false,subChildArray:[]},
      ]},
    {name:'Charts',isChild:true,childArray:[
        {name:'Typography',isSubChild:false,subChildArray:[]},
        {name:'Buttons',isSubChild:false,subChildArray:[]},
        {name:'Buttons Group',isSubChild:false,subChildArray:[]},
        {name:'Dropdown',isSubChild:false,subChildArray:[]},
        {name:'Nav',isSubChild:false,subChildArray:[]},
        {name:'Tables',isSubChild:false,subChildArray:[]},
        {name:'Progress',isSubChild:false,subChildArray:[]},
        {name:'Modal',isSubChild:false,subChildArray:[]},
        {name:'Alerts',isSubChild:false,subChildArray:[]},
        {name:'Popover',isSubChild:false,subChildArray:[]},
        {name:'Tooltip',isSubChild:false,subChildArray:[]},
      ]},
    {name:'Maps',isChild:true,childArray:[
        {name:'Typography',isSubChild:false,subChildArray:[]},
        {name:'Buttons',isSubChild:false,subChildArray:[]},
        {name:'Buttons Group',isSubChild:false,subChildArray:[]},
        {name:'Dropdown',isSubChild:false,subChildArray:[]},
        {name:'Nav',isSubChild:false,subChildArray:[]},
        {name:'Tables',isSubChild:false,subChildArray:[]},
        {name:'Progress',isSubChild:false,subChildArray:[]},
        {name:'Modal',isSubChild:false,subChildArray:[]},
        {name:'Alerts',isSubChild:false,subChildArray:[]},
        {name:'Popover',isSubChild:false,subChildArray:[]},
        {name:'Tooltip',isSubChild:false,subChildArray:[]},
      ]},
    {name:'Miscellaneous',isChild:true,childArray:[
        {name:'Typography',isSubChild:false,subChildArray:[]},
        {name:'Buttons',isSubChild:false,subChildArray:[]},
        {name:'Buttons Group',isSubChild:false,subChildArray:[]},
        {name:'Dropdown',isSubChild:false,subChildArray:[]},
        {name:'Nav',isSubChild:false,subChildArray:[]},
        {name:'Tables',isSubChild:false,subChildArray:[]},
        {name:'Progress',isSubChild:false,subChildArray:[]},
        {name:'Modal',isSubChild:false,subChildArray:[]},
        {name:'Alerts',isSubChild:false,subChildArray:[]},
        {name:'Popover',isSubChild:false,subChildArray:[]},
        {name:'Tooltip',isSubChild:false,subChildArray:[]},
      ]},
    {name:'Layout Builder',isChild:false},
  ]
  crudArray:any = [
    {name:'Forms $ Controls',isChild:true,childArray:[
        {name:'Form Controls',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Widgets',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Widgets 2',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Text Editors',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Layouts',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Validation',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Progress',isSubChild:false},
        {name:'Modal',isSubChild:false},
        {name:'Alerts',isSubChild:false},
        {name:'Popover',isSubChild:false},
        {name:'Tooltip',isSubChild:false},
      ]},
    {name:'KTDataTable',isChild:true,childArray:[
        {name:'Form Controls',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Widgets',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Widgets 2',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Text Editors',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Layouts',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Validation',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Progress',isSubChild:false},
        {name:'Modal',isSubChild:false},
        {name:'Alerts',isSubChild:false},
        {name:'Popover',isSubChild:false},
        {name:'Tooltip',isSubChild:false},
      ]},
    {name:'Datatables.net',isChild:true,childArray:[
        {name:'Form Controls',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Widgets',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Widgets 2',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Text Editors',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Layouts',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Validation',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Progress',isSubChild:false},
        {name:'Modal',isSubChild:false},
        {name:'Alerts',isSubChild:false},
        {name:'Popover',isSubChild:false},
        {name:'Tooltip',isSubChild:false},
      ]},
    {name:'File Upload',isChild:true,childArray:[
        {name:'Form Controls',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Widgets',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Widgets 2',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Text Editors',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Layouts',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Form Validation',isSubChild:true, subChildArray:[
            {name:'Base Inputs',isSubChildOfChild:false},
            {name:'Inputs Groups',isSubChildOfChild:false},
            {name:'Checkbox',isSubChildOfChild:false},
            {name:'Radio',isSubChildOfChild:false},
            {name:'Switch',isSubChildOfChild:false},
            {name:'Mega Options',isSubChildOfChild:false},
          ]},
        {name:'Progress',isSubChild:false},
        {name:'Modal',isSubChild:false},
        {name:'Alerts',isSubChild:false},
        {name:'Popover',isSubChild:false},
        {name:'Tooltip',isSubChild:false},
      ]},
  ]
  appArray:any = [
    {name:'Users',isChild:true,childArray:[
        {name:'List-Default',isSubChild:false},
        {name:'List-Datatable',isSubChild:false},
        {name:'List-Column1',isSubChild:false},
        {name:'List Column2',isSubChild:false},
        {name:'AddUser',isSubChild:false},
        {name:'EditUser',isSubChild:false}
      ]},
    {name:'Profiles',isChild:true,childArray:[
        {name:'List-Default',isSubChild:false},
        {name:'List-Datatable',isSubChild:false},
        {name:'List-Column1',isSubChild:false},
        {name:'List Column2',isSubChild:false},
        {name:'AddUser',isSubChild:false},
        {name:'EditUser',isSubChild:false}
      ]},
    {name:'Contacts',isChild:true,childArray:[
        {name:'List-Default',isSubChild:false},
        {name:'List-Datatable',isSubChild:false},
        {name:'List-Column1',isSubChild:false},
        {name:'List Column2',isSubChild:false},
        {name:'AddUser',isSubChild:false},
        {name:'EditUser',isSubChild:false}
      ]},
    {name:'Chat',isChild:true,childArray:[
        {name:'List-Default',isSubChild:false},
        {name:'List-Datatable',isSubChild:false},
        {name:'List-Column1',isSubChild:false},
        {name:'List Column2',isSubChild:false},
        {name:'AddUser',isSubChild:false},
        {name:'EditUser',isSubChild:false}
      ]},
    {name:'Projects',isChild:true,childArray:[
        {name:'List-Default',isSubChild:false},
        {name:'List-Datatable',isSubChild:false},
        {name:'List-Column1',isSubChild:false},
        {name:'List Column2',isSubChild:false},
        {name:'AddUser',isSubChild:false},
        {name:'EditUser',isSubChild:false}
      ]},
    {name:'Support center',isChild:true,childArray:[
        {name:'List-Default',isSubChild:false},
        {name:'List-Datatable',isSubChild:false},
        {name:'List-Column1',isSubChild:false},
        {name:'List Column2',isSubChild:false},
        {name:'AddUser',isSubChild:false},
        {name:'EditUser',isSubChild:false}
      ]},
    {name:'Todo',isChild:true,childArray:[
        {name:'List-Default',isSubChild:false},
        {name:'List-Datatable',isSubChild:false},
        {name:'List-Column1',isSubChild:false},
        {name:'List Column2',isSubChild:false},
        {name:'AddUser',isSubChild:false},
        {name:'EditUser',isSubChild:false}
      ]},
    {name:'Education',isChild:true,childArray:[
        {name:'List-Default',isSubChild:false},
        {name:'List-Datatable',isSubChild:false},
        {name:'List-Column1',isSubChild:false},
        {name:'List Column2',isSubChild:false},
        {name:'AddUser',isSubChild:false},
        {name:'EditUser',isSubChild:false}
      ]},
    {name:'ECommerce',isChild:true,childArray:[
        {name:'List-Default',isSubChild:false},
        {name:'List-Datatable',isSubChild:false},
        {name:'List-Column1',isSubChild:false},
        {name:'List Column2',isSubChild:false},
        {name:'AddUser',isSubChild:false},
        {name:'EditUser',isSubChild:false}
      ]},
    {name:'Inbox',isChild:false},
  ]
  pagesArray:any = [
    {name:'Pricing Tables',child:[
        {name:'Pricing Tables 1'},
        {name:'Pricing Tables 2'},
        {name:'Pricing Tables 3'},
        {name:'Pricing Tables 4'},
      ]},
    {name:'Wizards',child:[
        {name:'Wizard 1'},
        {name:'Wizard 2'},
        {name:'Wizard 3'},
        {name:'Wizard 4'},
        {name:'Wizard 5'},
        {name:'Wizard 6'},
      ]},
    {name:'Invoices',child: [
        {name: 'Invoices 1'},
        {name: 'Invoices 2'},
        {name: 'Invoices 3'},
        {name: 'Invoices 4'},
        {name: 'Invoices 5'},
        {name: 'Invoices 6'},
      ]},
    {name: 'Login', child: [
        {name: 'Login 1'},
        {name: 'Login 2'},
        {name: 'Login 3'},
        {name: 'Login 4'},
      ]},
    {name: 'Classic Login', child: [
        {name:'Login 1'},
        {name:'Login 2'},
        {name:'Login 3'},
        {name:'Login 4'},
        {name:'Login 5'},
        {name:'Login 6'},
      ]},
    {name: 'Error Pages', child: [
        {name: 'Error 1'},
        {name: 'Error 2'},
        {name: 'Error 3'},
        {name: 'Error 4'},
        {name: 'Error 5'},
        {name: 'Error 6'},
      ]}
  ]
  isSubChild: any ;
  isSubChild1: any ;
  constructor() { }

  ngOnInit(): void {
  }

  showDropDown(number: number) {
    this.showMenu = this.isSelect==number ? !this.showMenu : true
    this.isSelect=number
    this.isSubChild =  null
    this.isSubChild1 =  null
  }

  showChild(i: number) {
    this.isSubChild = this.isSubChild==i ? null : i
    this.isSubChild1=null
  }

  showSubChild(i: number) {
    this.isSubChild1 = this.isSubChild1==i ? null : i
  }
}
