import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  MyChart = [];
  ngOnInit() {
    this.MyChart = new Chart("myChart", {
      type: "doughnut",

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
            backgroundColor: [
              "rgb(255, 99, 132, 0.6)",
              "rgb(255, 159, 64, 0.6)",
              "rgb(255, 206, 86, 0.6)",
              "rgb(54, 162, 235, 0.6)",
              "rgb(75, 192, 192, 0.6)",
              "rgb(153, 102, 255, 0.6)"
            ],
            // borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },

      options: {
        legend: {
          position: "right"
        }
      }
    });
  }
}
