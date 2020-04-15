import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propertydetails',
  templateUrl: './propertydetails.page.html',
  styleUrls: ['./propertydetails.page.scss'],
})


export class PropertydetailsPage implements OnInit {
  i:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((res)=>{
      console.log(res[2]);
    });
  }}