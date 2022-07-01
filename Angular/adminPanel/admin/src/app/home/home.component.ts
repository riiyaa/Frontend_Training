import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

// import * as Chart from 'chart.js'
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @ViewChild('myChart')child: ElementRef | undefined
  chart:any;
  constructor() { }

  ngOnInit(): void {
    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: '# of Votes',
          data: [0,10000,5000,15000,10000,20000,15000,25000,20000,30000,25000,40000],
          borderColor: [
            '#985474'
          ],
          //@ts-ignore
          lineTension : 0.3,
          fillColor: "#e75654",
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    });
    this.chart = new Chart('Chart', {
      type: 'doughnut',
      indexLabelPlacement: "outside",
      radius: "90%",
      innerRadius: "75%",
      data: {
        labels: ['Direct','Social','Referral'],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 90, 150],
          //@ts-ignore
          radius: "90%",
          innerRadius: "75%",
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 5,
          borderWidth:2,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            //@ts-ignore
            cutout:120,
            radius: "90%",
            innerRadius: "75%",
          }
        }
      },
    });
  }


}
