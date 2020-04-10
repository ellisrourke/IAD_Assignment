import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PropertyDataService {
  public properties = [{streetName: 'Doncaster Court', streetNumber: 8, price:1200000, photo:'assets/houses/37Lynbrook.jpg'},
  {streetName: 'Sandgate Drive', streetNumber: 17, price:895000, photo:'assets/houses/17Sandgate.jpg'},
  {streetName: 'Peninsula Drive', streetNumber: 57, price:955000, photo:'assets/houses/57Peninsula.jpg'},
  {streetName: 'Newport Road', streetNumber: 58, price:1330000, photo:'assets/houses/58Newport.jpg'},
  {streetName: 'Northhill Parade', streetNumber: 143, price:1550000, photo:'assets/houses/143NorthHill.jpg'}];

  constructor() {}

  display(){
    this.properties.forEach(element => {console.log(element.streetName)
    });
  }

  addProperty(streetNameIn:string, streetNumberIn:number, priceIn:number, photoIn:string){
    let housePhoto = 'assets/houses/'+ photoIn;
    this.properties.push({streetName:streetNameIn,streetNumber:streetNumberIn,price:priceIn,photo:housePhoto})
  }

  getHousePrices(){
    let prices = [];
    this.properties.forEach(element => {prices.push(element.price)}); 
    return prices
  }




}//end of class

