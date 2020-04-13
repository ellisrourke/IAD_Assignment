import { Component,OnInit,ViewChild, ElementRef, ContentChild, asNativeElements } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LoginModalPage } from '../login-modal/login-modal.page';
import { PropertyDataService } from '../property-data.service'; 
import { AddPropertyModalPage } from '../add-property-modal/add-property-modal.page'

@Component({

  selector: 'app-tab2', 
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [PropertyDataService]
})
export class Tab2Page{
    loggedIn = false;
    isToggled: boolean = true;
    //properties = [{streetName: 'Doncaster Court', streetNumber: 8, price:1200000, photo:'assets/houses/37Lynbrook.jpg'}];
    properties = this.PropertyDataService.properties;
    toast: any;
    PDS: any;

    username: string;
    password: string;

    streetNo: number;
    streetName: string;
    price: number;
    
    constructor(public toastController : ToastController, private modalController:ModalController,public PropertyDataService: PropertyDataService) {

    }
 
  ngOnInit(){}
    
    
  changed() {
    this.isToggled = !this.isToggled;
    console.log("working" + this.isToggled);
  }

  //addProperty(){this.PropertyDataService.addProperty("Doncaster Court",21,645000,'37Lynbrook.jpg')}
  
  removeProperty(i:number){
    console.log("remove ",i)
    this.PropertyDataService.properties.splice(i,1)
  }


  popup(status) {
    if(status){status = "succesful"} else {status = "unsuccesful"}
    this.toast = this.toastController.create({
      color: "secondary",
      position: "top",
      message: 'Login was ' + status,
      duration: 3000
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }


  async loginModal(){
    const modal = await this.modalController.create({
    component: LoginModalPage,
    componentProps: {username:this.username,password:this.password}
    });
    modal.onDidDismiss()
    .then((data) => {
    let status = data.data
    console.log(status);
    this.popup(status);
    });
    return modal.present();
    }

    async addPropertyModal(){
      const modal = await this.modalController.create({
        component: AddPropertyModalPage,
        componentProps: {streetName:this.streetName,streetNo:this.streetNo,price:this.price}
      });
      
      modal.onDidDismiss()
      .then((data) => {
        console.log(data.data.price);
        let newProperty = data.data
        this.PropertyDataService.addProperty(newProperty.streetName,newProperty.streetNo,newProperty.price,newProperty.url)
      });
      return modal.present();
      }
  
  pressEvent(){
    console.log("pressed")
  }

  onSearchChange(event){
    //return this.properties.filter((item) => {
     // return item.streetName.toLowerCase().includes(searchTerm.toLowerCase());
     let searchTerm = event.target.value
     console.log(searchTerm)
     if(searchTerm != ''){this.properties = this.PropertyDataService.findProperties(searchTerm);}
     else{this.properties = this.PropertyDataService.properties;}
    }

  }

    //let value = e.details.value;
    //if(value = ''){
    //  return;
    //}
    //this.properties = this.PropertyDataService.findProperties(value)
