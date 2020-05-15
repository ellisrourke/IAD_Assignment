import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-tab3', 
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {//list of static agents to be displayed in the agents contact page
  public agents = [{name:'Shane McLeod',email:'ellisrourke@gmail.com',phone:'0413331945',photo:'shanemcleod.jpg',agency:'LJ Hooker'},
  {name:'Jesse Young',email:'ellisrourke@gmail.com',phone:'0468643571',photo:'jesseyoung.jpg',agency:'Remax'},
  {name:'Leanne Jenke',email:'ellisrourke@gmail.com',phone:'0432121740',photo:'leannejenke.png',agency:'Ray White'},
  {name:'Grant Kirkbek',email:'ellisrourke@gmail.com',phone:'0411869977',photo:'grantkirkbek.png',agency:'Ray White'},
  {name:'Rob Prior',email:'ellisrourke@gmail.com',phone:'0414643130',photo:'robprior.png',agency:'Harcourts'},
  {name:'Melody Hu',email:'ellisrourke@gmail.com',phone:'0431189305',photo:'melodyhu.png',agency:'LJ Hooker'},
  {name:'Lyn Newcomb',email:'ellisrourke@gmail.com',phone:'0407142721',photo:'lynnewcomb.png',agency:'Harcourts'},
  {name:'Corey Bedford',email:'ellisrourke@gmail.com',phone:'0408071911',photo:'coreybedford.jpg',agency:'Remax'},
  {name:'Michael Elliss',email:'ellisrourke@gmail.com',phone:'0402858174',photo:'michealelliss.png',agency:'Mcgrath'},
  {name:'Lea Pettett',email:'ellisrourke@gmail.com',phone:'0421629009',photo:'leapettett.jpg',agency:'LJ Hooker'},
  {name:'Conrad Hyslop',email:'ellisrourke@gmail.com',phone:'0458881181',photo:'conradhyslop.jpg',agency:'Ray White'},
  {name:'Paul Glazby',email:'ellisrourke@gmail.com',phone:'0422877235',photo:'paulglazby.jpg',agency:'Ray White'}]
  constructor() {}

}
