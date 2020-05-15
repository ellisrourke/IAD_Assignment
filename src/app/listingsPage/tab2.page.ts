import { Component,OnInit,ViewChild, ElementRef, ContentChild, asNativeElements } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LoginModalPage } from '../login-modal/login-modal.page';
import { PropertyDataService } from '../property-data.service'; 
import { AddPropertyModalPage } from '../add-property-modal/add-property-modal.page'
import { PropertydetailsPage } from '../propertydetails/propertydetails.page'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Storage } from '@ionic/storage'


@Component({ 

  selector: 'app-tab2', 
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  //providers: [PropertyDataService]
  providers: []

})
export class Tab2Page{
    loggedIn = false;
    isToggled: boolean = true;
    properties = []
    toast: any;
    PDS: any;

    username: string;
    password: string;

    streetNo: number; 
    streetName: string;
    price: number;
    
    constructor(public toastController : ToastController, private modalController:ModalController,public PropertyDataService: PropertyDataService, public router : Router, private route: ActivatedRoute,     public storage : Storage,){

    }
 
  async ngOnInit(){
    //if the app is being loaded for the first time, load default properties from storage,
    //else load the already stored properties from storage instead
    this.storage.get("properties").then((val) => {
      if(val==""){
        this.PropertyDataService.properties = this.PropertyDataService.defaultProperties
        this.properties = this.PropertyDataService.properties;
      } else {
        this.properties = val;
      }
  });


    this.loginModal(); //present login modal to the user before app access.
    this.properties = this.PropertyDataService.properties
  }
     
  removeProperty(i:number){
    //given the index of a property from the html ngModel, remove that property from the array and update the property data service
    //and store the new properties in the storage module
    this.properties.splice(i,1)
    this.PropertyDataService.properties = this.properties;
    this.storage.set("properties",this.properties)
  }


  popup(status) {
    //inform user if their property was succesfully listed via a toast notification.
    if(status){status = "succesful"} else {status = "unsuccesful"}
    this.toast = this.toastController.create({
      color: "secondary",
      position: "bottom",
      message: 'Property listing was ' + status,
      duration: 3000
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }


  async loginModal(){
    //provide the login modal to the user
    const modal = await this.modalController.create({
    component: LoginModalPage,
    componentProps: {username:this.username,password:this.password}
    });
    modal.onDidDismiss()
    .then((data) => {});
    return modal.present(); 
    }

    async addPropertyModal(){
      //present the add property modal to the user and when returned,
      //add the data to the array and update the storage module with the new property
      const modal = await this.modalController.create({
        component: AddPropertyModalPage,
        componentProps: {streetName:this.streetName,streetNo:this.streetNo,price:this.price}
      });
      
      modal.onDidDismiss() 
      .then((data) => {
        console.log(data.data.price);
        let newProperty = data.data
        this.PropertyDataService.addProperty(newProperty.streetName,newProperty.streetNo,newProperty.price,newProperty.url)
        this.properties = this.PropertyDataService.properties
        this.storage.set("properties",this.PropertyDataService.properties)
        this.popup(1)
      });
      return modal.present();
      }
  
  viewProperty(i:number){
    //view a single property in more detail given its parameters via the ionic router
    this.router.navigate(['/propertydetails/i'],{
    queryParams: this.PropertyDataService.properties[i],
    });
  }

  onSearchChange(event){
    //update the list of properties based on a search term provided by the user.
     let searchTerm = event.target.value
     console.log(searchTerm)
     if(searchTerm != ''){this.properties = this.PropertyDataService.findProperties(searchTerm);}
     else{this.properties = this.PropertyDataService.properties;}
    }
  }
