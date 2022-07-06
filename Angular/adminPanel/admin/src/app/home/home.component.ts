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
  SubTitle,
  TooltipItem
} from 'chart.js';
import {AppService} from "../app.service";

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
  chart: any;

  // labels: any = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];
  datas: any = [];
  urlData: any
  labelData: any =[]

  constructor(public _service: AppService) {
  }

  ngOnInit(): void {
    this._service.getUrl.subscribe((data: any) => {
      this.urlData = data
      this.labelData.push(this.urlData.data.map((j:any)=>j.Year))
      this.datas.push(this.urlData.data.map((j:any)=>j.Population))
      this.labelData = this.labelData.flat().reverse();
      this.datas = this.datas.flat().reverse()

      // this.chart = new Chart('myChart', {
      //   type: 'line',
      //   data: {
      //     labels: this.labelData,
      //     datasets: [{
      //       label: '# of Votes',
      //       fill: true,
      //       backgroundColor: '#d2c7d0',
      //       data: this.datas,
      //       borderColor: ['#3d70bd'],
      //       //@ts-ignore
      //       lineTension: 0.3,
      //       borderWidth: 4,
      //       pointStyle: 'rectRot',
      //     }]
      //   },
      //   options: {
      //     scales: {
      //       y: {
      //         beginAtZero: true,
      //         grace: '20%',
      //       },
      //       x: {
      //         display: false
      //       }
      //     },
      //     title: {
      //       display: true,
      //       position: 'bottom'
      //     },
      //     plugins: {
      //       //@ts-ignore
      //       legend: false, // Hide legend
      //       tooltip: {
      //         enabled: true,
      //         bodyColor: '#9292b2',
      //         backgroundColor: '#eae7e8',
      //         //@ts-ignore
      //         titleFontSize: 50,
      //         titleColor: '#1d7ce8',
      //         titleFont: {
      //           weight: 'bold',
      //           family: 'Helvetica',
      //           size: 20,
      //         }, titleAlign: "center",
      //         displayColors: true,
      //         boxWidth: 0,
      //         boxHeight: 0,
      //         usePointStyle: true,
      //         cornerRadius: 15,
      //         caretSize: 20,
      //         caretPadding: 10,
      //         titleMarginBottom: 10,
      //         borderWidth: 2,
      //         borderColor: "#e5d6cf",
      //         fontColor: "red",
      //         bodyFont: {
      //           size: 15,
      //         },
      //
      //         padding: 10,
      //         callbacks: {
      //           labelColor(tooltipItem: any): any {
      //             if (tooltipItem.datasetIndex === 0) {
      //               return {
      //                 borderColor: "#FFFFFF",
      //                 backgroundColor: "#FFCD2E",
      //               };
      //             }
      //           },
      //           label: function (context) {
      //             let label = 'Earnings '
      //
      //             if (label) {
      //               label += ': ';
      //             }
      //             if (context.parsed.y !== null) {
      //               label += new Intl.NumberFormat('en-US', {
      //                 style: 'currency',
      //                 currency: 'INR'
      //               }).format(context.parsed.y) + ' hello';
      //             }
      //             return label;
      //           }
      //         }
      //       }
      //     },
      //     // elements: {
      //     //   point:{
      //     //     radius: 0
      //     //   }
      //     // }
      //   }
      // });
      this.chart = new Chart('myChart', {
        type: 'line',
        indexLabelPlacement: "outside",
        radius: "90%",
        innerRadius: "75%",
        data: {
          labels: this.labelData,
          datasets: [{
            label: 'My First Dataset',
            data: this.datas,
            backgroundColor: [
              'rgb(66,122,241)',
            ],
            borderWidth: 2,
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              //@ts-ignore
              cutout: 120,
              radius: "90%",
              innerRadius: "75%",
            }
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem: any) {
                return "$" + tooltipItem + " and so worth it !";
              }
            }
          },
        },
      });
      this.chart = new Chart('Chart', {
        type: 'doughnut',
        indexLabelPlacement: "outside",
        radius: "90%",
        innerRadius: "9%",
        data: {
          labels: this.labelData,
          datasets: [{
            label: 'My First Dataset',
            data: this.datas,
            backgroundColor: [
              'rgb(245,79,193)',
              'rgb(54, 162, 235)',
              'rgb(238,29,29)',
              'rgb(255, 205, 86)',
              'rgb(116,224,92)',
              'rgb(238,236,84)',
              "rgb(231,100,53)"
            ],
            hoverOffset: 5,
            borderWidth: 2,
          }]
        },
        options: {
          indexLabelPlacement: "outside",
          radius: "90%",
          innerRadius: "9%",
          cutout:'80%',
          scales: {
            y: {
              beginAtZero: true,
              //@ts-ignore
              cutout: 120,
              radius: "90%",
              innerRadius: "75%",
            }
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem: any) {
                return "$" + tooltipItem + " and so worth it !";
              }
            }
          },
        },
      });
      this.chart = new Chart('barChart', {
        type: 'bar',
        indexLabelPlacement: "outside",
        radius: "90%",
        innerRadius: "75%",
        data: {
          labels: this.labelData,
          datasets: [{
            label: 'My First Dataset',
            data: this.datas,
            //@ts-ignore
            radius: "90%",
            innerRadius: "75%",
            backgroundColor: [
              'rgb(245,79,193)',
              'rgb(54, 162, 235)',
              'rgb(238,29,29)',
              'rgb(255, 205, 86)',
              'rgb(116,224,92)',
              'rgb(238,236,84)',
              "rgb(231,100,53)"
            ],
            hoverOffset: 5,
            borderWidth: 2,
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              //@ts-ignore
              cutout: 120,
              radius: "90%",
              innerRadius: "75%",
            }
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem: any) {
                return "$" + tooltipItem + " and so worth it !";
              }
            }
          },
        },
      });
      this.chart = new Chart('pieChart', {
        type: 'pie',
        indexLabelPlacement: "outside",
        radius: "90%",
        innerRadius: "75%",
        data: {
          labels: this.labelData,
          datasets: [{
            label: 'My First Dataset',
            data: this.datas,
            //@ts-ignore
            radius: "90%",
            innerRadius: "75%",
            backgroundColor: [
              'rgb(245,79,193)',
              'rgb(54, 162, 235)',
              'rgb(238,29,29)',
              'rgb(255, 205, 86)',
              'rgb(116,224,92)',
              'rgb(238,236,84)',
              "rgb(231,100,53)"
            ],
            hoverOffset: 5,
            borderWidth: 2,
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              //@ts-ignore
              cutout: 120,
              radius: "90%",
              innerRadius: "75%",
            }
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem: any) {
                return "$" + tooltipItem + " and so worth it !";
              }
            }
          },
        },
      });
    })

  }


}
