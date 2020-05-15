import { Component, OnInit } from '@angular/core';
import {NavParams,ModalController} from '@ionic/angular'
import { PropertyDataService } from '../property-data.service'; 
import { element } from 'protractor';
import { Storage } from '@ionic/storage'
import { stringify } from 'querystring';
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
  imagefile = null;
  imageFile: string | ArrayBuffer;

  constructor(public navParams:NavParams,public modalController:ModalController,public PropertyDataService: PropertyDataService, public storage:Storage) { }

  ngOnInit() {
    //fetch data from the modal form
    this.streetNo = this.navParams.get('streetNo')
    this.streetName = this.navParams.get('streetName')
    this.price = this.navParams.get('price')
  }


imageSelected(files){
  //allow user to select a file from local storage to be saved with the property listing
  //and convert uploaded image to data URL to be stored in string format
  let fileReader = new FileReader();
  fileReader.onload = e => {
    this.imageFile = fileReader.result;
  }
fileReader.readAsDataURL(files[0])
}

closeAddPropertyModal(event){  
  //close modal and return all data to the modal controller
  this.modalController.dismiss({streetName:this.streetName, streetNo:this.streetNo, price:this.price, url:this.imageFile});
}



}
