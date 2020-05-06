import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  longArea = [];
  shortArea = [];
  radialArr1 = [];
  radialArr2 = [];
  radialArr3 = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.longArea = this.dashboardService.longArea();
    this.shortArea = this.dashboardService.shortArea();
    this.radialArr1 = this.dashboardService.radialDataOne();
    this.radialArr2 = this.dashboardService.radialDataTwo();
    this.radialArr3 = this.dashboardService.radialDataTwo();
  }

}
