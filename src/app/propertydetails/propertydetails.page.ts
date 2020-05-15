import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propertydetails',
  templateUrl: './propertydetails.page.html',
  styleUrls: ['./propertydetails.page.scss'],
})


export class PropertydetailsPage implements OnInit {
  //initialise values to be displayed on screen
  streetName:string;
  streetNo:number;
  price:number;
  photo:string;
  beds:number;
  baths:number; 

  //activaed route used to pass data in
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //get values from the router and assign them to values to be displayed using the ngModel
    this.route.queryParams.subscribe((res)=>{
      console.log(res);
      this.streetName = res.streetName;
      this.streetNo = res.streetNumber;
      this.price = res.price;
      this.photo = res.photo;

    });
  }}