import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PropertyDataService } from '../property-data.service'; 
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  //providers: [PropertyDataService]
  providers: []

})
export class Tab1Page implements OnInit { 
  @ViewChild("lineCanvas") lineCanvas: ElementRef;

  private lineChart: Chart; 
  x = []
  constructor(public PropertyDataService: PropertyDataService) {}
 
  ngOnInit(){
    console.log('aaa')
    


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

    ionViewWillEnter(){
      this.updateChart()
    }	

    updateChart() {
      console.log("UPDATE")
      console.log(this.lineChart.data.datasets[0].data)
      let newPrices = []
      this.PropertyDataService.properties.forEach(element => {
        newPrices.push(element.price)
      });

      this.lineChart.data.datasets[0].data = newPrices;
      this.lineChart.data.labels = newPrices;
      this.lineChart.update();
    }

}
