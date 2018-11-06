import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  constructor() {}
  @ViewChild("myChart")
  private chartRef;
  MyChart: any;
  ngOnInit() {
    this.MyChart = new Chart(this.chartRef.nativeElement, {
      // The type of chart we want to create
      type: "doughnut",

      // The data for our dataset
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },

      // Configuration options go here
      options: {
        title: {
          text: "kimdim",
          display: true
        }
      }
    });
  }
}
