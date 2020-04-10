import { Component,OnInit,ViewChild, ElementRef, ContentChild, asNativeElements } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LoginModalPage } from '../login-modal/login-modal.page';
import { PropertyDataService } from '../property-data.service'; 

@Component({

  selector: 'app-tab2', 
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [PropertyDataService]
})
export class Tab2Page{
    isToggled: boolean = true;
    //properties = [{streetName: 'Doncaster Court', streetNumber: 8, price:1200000, photo:'assets/houses/37Lynbrook.jpg'}];
    properties = this.PropertyDataService.properties;
    toast: any;
    PDS: any;
    username: string;
    password: string;

    constructor(public toastController : ToastController, private modalController:ModalController,public PropertyDataService: PropertyDataService) {

    }
 
  ngOnInit(){
    this.PropertyDataService.properties.forEach(element => {console.log(element.streetName)});
  }
    
    
  changed() {
    this.isToggled = !this.isToggled;
    console.log("working" + this.isToggled);
  }

  addProperty(){
    this.PropertyDataService.addProperty("Doncaster Court",21,645000,'37Lynbrook.jpg')
  }


  popup() {
    this.toast = this.toastController.create({
      color: "secondary",
      position: "top",
      message: 'toggle is' + this.isToggled,
      duration: 3000
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }

  /*async loginModal(){
    const modal = await this.modalController.create({
    component: LoginModalPage,
    componentProps: {username:this.username,password:this.password}
    });
    modal.onDidDismiss()
    .then((data) => {
    this.username = data.data.username;
    this.password = data.data.password;
    console.log(this.username,this.password);
    });
    return modal.present();
    }
*/

  async loginModal(){
    const modal = await this.modalController.create({
    component: LoginModalPage,
    componentProps: {username:this.username,password:this.password}
    });
    modal.onDidDismiss()
    .then((data) => {
    let status = data.data
    console.log(status);
    });
    return modal.present();
    }


  pressEvent(){
    console.log("pressed")
  }

}
 