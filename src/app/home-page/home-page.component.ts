import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { GetDataService } from '../get-data.service';
import { Router } from '@angular/router';

console.log("homie");
=======

>>>>>>> 3121a85fec57b5b7c596ca4c5cd8dc09541c33e2
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

<<<<<<< HEAD
  Data;

  constructor(private router : Router , private service : GetDataService) {
    
   }

  ngOnInit() {
  this.service.get1().subscribe( (data1 ) => {
    this.Data=data1;
  } )
  }

  goToDetails(id1)
  {
      this.router.navigate(['/product-details'] , { queryParams : {id : id1 }});
=======
  constructor() { }

  ngOnInit() {
>>>>>>> 3121a85fec57b5b7c596ca4c5cd8dc09541c33e2
  }

}
