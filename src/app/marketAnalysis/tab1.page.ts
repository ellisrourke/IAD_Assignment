import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PropertyDataService } from '../property-data.service'; 
import { Chart } from 'chart.js';
//test
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  //providers: [PropertyDataService]
  providers: []

})
export class Tab1Page implements OnInit { 
  @ViewChild("lineCanvas",{static:true}) lineCanvas: ElementRef;
  private lineChart: Chart; //main chart element
  x = [] //list of proptery prices for the chart
  constructor(public PropertyDataService: PropertyDataService) {}
 
  ngOnInit(){
    //initialise price values to be displayed on chart
    this.PropertyDataService.properties.forEach(element => {this.x.push(element.price)}); 
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: this.x,
        datasets: [ 
          {
            label: "Average House Price",
            data: this.x,
            backgroundColor: ['#2dd36f'],
            borderColor:   ['4df38f'],
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
      //when a property is added or removed from the application
      //this funtion is used to update the graph with the new property prices
      let newPrices = []
      this.PropertyDataService.properties.forEach(element => {
        newPrices.push(element.price)
      });

      this.lineChart.data.datasets[0].data = newPrices;
      this.lineChart.data.labels = newPrices;
      this.lineChart.update();
    }


    ionViewDidEnter(){
      console.log("did enter")
      this.updateChart()
    }
}
