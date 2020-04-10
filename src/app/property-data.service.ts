import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyDataService {
  public properties = [{streetName: 'Doncaster Court', streetNumber: 8, price:1200000, photo:'assets/houses/37Lynbrook.jpg'}];

  constructor() {
    this.addProperty("Oceanic Drive",22,2400000)
   }

  display(){
    this.properties.forEach(element => {console.log(element.streetName)
    });
  }

  addProperty(streetNameIn:string, streetNumberIn:number, priceIn:number){
    let housePhoto = 'assets/houses/21Pearl.jpg';
    this.properties.push({streetName:streetNameIn,streetNumber:streetNumberIn,price:priceIn,photo:housePhoto})
  }
}
