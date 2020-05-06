import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  
  longArea () {
    return [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100]
      }
    ]
  }
  shortArea () {
    return [
      {
        name: "series1",
        data: [45, 60, 48, 71, 62, 39, 60]
      }
    ]
  }
 
  radialDataOne () {
    return [70]
  }
  radialDataTwo () {
    return [37]
  }
  radialDataThree () {
    return [90]
  }


}
