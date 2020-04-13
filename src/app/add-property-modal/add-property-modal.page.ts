import { Component, OnInit } from '@angular/core';
import {NavParams,ModalController} from '@ionic/angular'
import { PropertyDataService } from '../property-data.service'; 
import { element } from 'protractor';

@Component({
  selector: 'app-add-property-modal',
  templateUrl: './add-property-modal.page.html',
  styleUrls: ['./add-property-modal.page.scss'],
  providers: [PropertyDataService]

})
export class AddPropertyModalPage implements OnInit {

  streetNo:number;
  streetName:string;
  price:number;

  constructor(public navParams:NavParams,public modalController:ModalController,public PropertyDataService: PropertyDataService) { }

  ngOnInit() {
    this.streetNo = this.navParams.get('streetNo')
    this.streetName = this.navParams.get('streetName')
    this.price = this.navParams.get('price')
  }


//closeLoginModal(){
//  this.users.forEach(element => {
//    if(element.un === this.username){
//      if(element.pa === this.password){
//        this.modalController.dismiss(true)}}
//
//})
//this.modalController.dismiss(false)/
//}}


closeAddPropertyModal(){  
  const photoURL = '57Peninsula.jpg';
  //this.PropertyDataService.addProperty(this.streetName, this.streetNo, this.price, photoURL)
  this.modalController.dismiss({streetName:this.streetName, streetNo:this.streetNo, price:this.price, url:photoURL});
}
  
}
