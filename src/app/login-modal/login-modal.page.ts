import { Component, OnInit } from '@angular/core';
import {NavParams,ModalController} from '@ionic/angular'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {
  username: string;
  password: string;
  ret: {username:string,password:string};

  constructor(public navParams:NavParams,public modalController:ModalController){
  }

  ngOnInit() {
    this.username = this.navParams.get('username')
    this.password = this.navParams.get('password')
    }

  closeLoginModal(){
    this.modalController.dismiss({username:this.username,password:this.password});
    }

}
