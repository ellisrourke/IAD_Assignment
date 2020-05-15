import { Injectable } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { element } from 'protractor';
import { Storage } from '@ionic/storage'



@Injectable({
  providedIn: 'root'
}) 
export class PropertyDataService {
  public properties = []
  //default list of properties to be loaded to storage on initial app load
  defaultProperties = [{streetName: 'Doncaster Court', streetNumber: 8, price:1200000, photo:'assets/houses/37Lynbrook.jpg'},
  {streetName: 'Sandgate Drive', streetNumber: 17, price:895000, photo:'assets/houses/17Sandgate.jpg'},
  {streetName: 'Peninsula Drive', streetNumber: 57, price:955000, photo:'assets/houses/57Peninsula.jpg'},
  {streetName: 'Newport Road', streetNumber: 58, price:1330000, photo:'assets/houses/58Newport.jpg'},
  {streetName: 'Northhill Parade', streetNumber: 143, price:1550000, photo:'assets/houses/143NorthHill.jpg'}];

  constructor(private storage : Storage) {}

  async ngOnInit(){} 

  addProperty(streetNameIn:string, streetNumberIn:number, priceIn:number, photoIn:string){
    //given the required parameters from the add property modal, add the property to the array and ensure it is saved in storage
    let housePhoto = photoIn;
    this.properties.push({streetName:streetNameIn,streetNumber:streetNumberIn,price:priceIn,photo:housePhoto})
    this.storage.set("properties",this.properties)
  }

  getHousePrices(){
    //return a list of house prices for calulations in other areas of the app
    let prices = [];
    this.properties.forEach(element => {console.log(element.price)}); 
    return prices
  }

  findProperties(search){
    //called from the searchbar in the main page of the app, 
    //find all properties that satisfy the search term and return the array to the page.
    let props = []
    search = search.toLowerCase()
    this.properties.forEach(element => {if (element.streetName.toLowerCase().includes(search)){props.push(element)}
    });
    return props
  }




}//end of class

