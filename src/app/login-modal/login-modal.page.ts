import { Component, OnInit } from '@angular/core';
import {NavParams,ModalController} from '@ionic/angular'
import { element } from 'protractor';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {
  users = []
  username: string;
  password: string; 
  ret: {username:string,password:string};

  constructor(public navParams:NavParams,public modalController:ModalController){
    this.users = [{un: "ellisrourke",pa: "password123",},{un:"felicityrose",pa:"missy2000"}];
  }


  ngOnInit() {
    this.username = this.navParams.get('username')
    this.password = this.navParams.get('password')
    }

  closeLoginModal(){
    this.users.forEach(element => {
      if(element.un === this.username){
        if(element.pa === this.password){
          this.modalController.dismiss(true)}}

})
this.modalController.dismiss(false)
}}