import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';


@Component({ 
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent { 
    defaultProperties = [{streetName: 'Doncaster Court', streetNumber: 8, price:1200000, photo:'assets/houses/37Lynbrook.jpg'},
    {streetName: 'Sandgate Drive', streetNumber: 17, price:895000, photo:'assets/houses/17Sandgate.jpg'},
    {streetName: 'Peninsula Drive', streetNumber: 57, price:955000, photo:'assets/houses/57Peninsula.jpg'},
    {streetName: 'Newport Road', streetNumber: 58, price:1330000, photo:'assets/houses/58Newport.jpg'},
    {streetName: 'Northhill Parade', streetNumber: 143, price:1550000, photo:'assets/houses/143NorthHill.jpg'}]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public storage : Storage,
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    if (await this.storage.get("properties") == null){
      await this.storage.set("properties","")
    }




    }
  }