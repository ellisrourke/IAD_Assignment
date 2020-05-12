import { Component, OnInit } from '@angular/core';
import {NavParams,ModalController} from '@ionic/angular'
import { element } from 'protractor';
import { AlertController } from '@ionic/angular';
import { stat, close } from 'fs';
import { ThrowStmt } from '@angular/compiler';
import { VirtualTimeScheduler } from 'rxjs';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {
  users = []
  username: '';
  password: ''; 
  ret: {username:string,password:string};

  constructor(public navParams:NavParams,public modalController:ModalController, public alertController: AlertController,public loadingController: LoadingController){
    this.users = [{un: "ellisrourke",pa: "password123",},{un:"felicityrose",pa:"missy2000"},{un:'1',pa:'1'}];
  }


  ngOnInit() {
    this.username = this.navParams.get('username')
    this.password = this.navParams.get('password')
    }

  async verifyLogin(){
  await this.presentLoading()
    let userIndex = -1;
  for(let i=0;i<this.users.length;i++){
    console.log(this.users[i].un , this.username)
    if(this.users[i].un == this.username){
      userIndex = i;
      break;}
  } console.log(userIndex)

  if(userIndex != -1){

    if(this.users[userIndex].pa == this.password){this.modalController.dismiss(true)} else {this.presentAlert() }
    } else {
      this.presentAlert()
    }

}


async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Error',
    subHeader: '',
    message: 'The login details you provided are incorrect...',
    buttons: ['Dismiss']
  });
  await alert.present();
}

async presentLoading() {
  const loading = await this.loadingController.create({
    spinner: "crescent",
    duration: 1500,
    message: 'Verifying login details',
    translucent: true,
    cssClass: 'custom-class custom-loading',
    backdropDismiss: false
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed with role:', role);
}
}








