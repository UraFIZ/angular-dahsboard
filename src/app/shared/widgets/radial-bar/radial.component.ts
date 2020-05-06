import { Component, ViewChild, OnInit, Input } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
}


@Component({
    selector: 'app-radial-bar',
    templateUrl: './radial.component.html',
    styleUrls: ['./radial.component.scss']
  })

  export class RadialComponent implements OnInit {

    @Input() radialArr = [];
    @ViewChild('chart') chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {}
    ngOnInit() {
        this.chartOptions = {
            series: this.radialArr,
            chart: {
              height: 350,
              type: 'radialBar'
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '70%'
                }
              }
            },
            labels: ['Cricket']
          };
    }
  }
