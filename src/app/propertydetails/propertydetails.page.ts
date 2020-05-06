import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propertydetails',
  templateUrl: './propertydetails.page.html',
  styleUrls: ['./propertydetails.page.scss'],
})


export class PropertydetailsPage implements OnInit {

  streetName:string;
  streetNo:number;
  price:number;
  photo:string;
  beds:number;
  baths:number; 

  description ="If you are seeking a spacious family home with an outdoor lifestyle in a great central location, then look no further! Situated on a peaceful 782m2 level block, there is room for everyone with two large separate living areas, and a large grassed back yard. Let the kids run around further, with direct back access onto Lancewood Circuit Reserve.";
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.description);

    this.route.queryParams.subscribe((res)=>{
      console.log(res);
      this.streetName = res.streetName;
      this.streetNo = res.streetNumber;
      this.price = res.price;
      this.photo = res.photo;

    });
  }}