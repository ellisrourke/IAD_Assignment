import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PropertyDataService } from '../property-data.service'; 
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [PropertyDataService]

})
export class Tab1Page implements OnInit { 
  @ViewChild("lineCanvas") lineCanvas: ElementRef;
  private lineChart: Chart; 
  x = []
  
  constructor(public PropertyDataService: PropertyDataService) {

  }
 
  ngOnInit(){
    this.PropertyDataService.properties.forEach(element => {this.x.push(element.price),console.log(this.x.length)}); 
    console.log(this.x)
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: this.x,
        datasets: [ 
          {
            label: "Average House Price",
            data: this.x,
            backgroundColor: ['#3dc2ff90'],
            borderColor:   ['#3dc2ffff'],
            borderWidth: 1
          }
        ]
      },
      options: { responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {callback: function(value, index, values) {
                        return value/1000000;
                    },
                beginAtZero: false
              } 
            }
          ]
        }
      }
    });
    
    }

    updateChart() {
      let chart = this.lineChart;
      let d = [];
      this.PropertyDataService.properties.forEach(element => {d.push(element.price)}); 
      console.log(chart)
      chart.data.datasets.pop();
      chart.data.datasets.push({
        label: d,
        data: d
      });
      chart.update();
    }

}
