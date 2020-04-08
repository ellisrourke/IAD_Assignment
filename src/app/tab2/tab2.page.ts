import { Component,OnInit,ViewChild, ElementRef, ContentChild, asNativeElements } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LoginModalPage } from '../login-modal/login-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
    isToggled: boolean = true;
    properties = [{streetName: 'Doncaster Court', streetNumber: 8, price:1200000, photo:'assets/houses/37Lynbrook.jpg'}];
    toast: any;
    username: string;
    password: string;

    constructor(public toastController : ToastController, private modalController:ModalController) {
      let newProperty = {streetName:"Pearl Street",streetNumber:21,price:750001,photo:'assets/houses/21Pearl.jpg'} 
      this.properties.push(newProperty) 

    }
 
    
    
  changed() {
    this.isToggled = !this.isToggled;
    console.log("working" + this.isToggled);
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

  async loginModal(){
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
  }