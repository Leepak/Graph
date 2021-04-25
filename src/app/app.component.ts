import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graph';mainChart: any;
  subChart: any;
  constructor(){}
  public handleMainChart(chartData: any) {
    console.log("main chart data");
    this.mainChart = chartData;
    console.log(this.mainChart);
  }


  
}
