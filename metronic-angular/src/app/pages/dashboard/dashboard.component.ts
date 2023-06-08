import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  options:any={};
  data:any[] = [];
  columns: any = {};

  constructor() { }

  ngOnInit(): void {
    this.columns = [
      { key: 'id', title: "ID" },
      { key: 'name', title: 'Name' },
      { key: 'phone', title: 'Phone' },
      { key: 'company', title: 'Company'}
    ]

    this.data = [
      {
        "id": "1",
        "name": "Warren",
        "phone": "1-412-485-9725",
        "company": "Etiam Institute"
      },{
        "id": "1",
        "name": "Warren",
        "phone": "1-412-485-9725",
        "company": "Etiam Institute"
      },{
        "id": "1",
        "name": "Warren",
        "phone": "1-412-485-9725",
        "company": "Etiam Institute"
      },{
        "id": "1",
        "name": "Warren",
        "phone": "1-412-485-9725",
        "company": "Etiam Institute"
      },{
        "id": "1",
        "name": "Warren",
        "phone": "1-412-485-9725",
        "company": "Etiam Institute"
      },{
        "id": "1",
        "name": "Warren",
        "phone": "1-412-485-9725",
        "company": "Etiam Institute"
      },{
        "id": "1",
        "name": "Warren",
        "phone": "1-412-485-9725",
        "company": "Etiam Institute"
      },{
        "id": "1",
        "name": "Warren",
        "phone": "1-412-485-9725",
        "company": "Etiam Institute"
      },{
        "id": "1",
        "name": "Warren",
        "phone": "1-412-485-9725",
        "company": "Etiam Institute"
      },{
        "id": "1",
        "name": "Warren",
        "phone": "1-412-485-9725",
        "company": "Etiam Institute"
      },{
        "id": "1",
        "name": "Warren",
        "phone": "1-412-485-9725",
        "company": "Etiam Institute"
      },
      {
        "id": "2",
        "name": "Brendan",
        "phone": "1-724-406-2487",
        "company": "Enim Commodo Limited"
      }
    ]
    const data = {
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };

    const ctx:any = document.getElementById('kt_mixed_widget_6_chart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false,

          },
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

}
