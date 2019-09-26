import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../get-data.service';
=======
>>>>>>> 3121a85fec57b5b7c596ca4c5cd8dc09541c33e2

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
<<<<<<< HEAD
  ID;
  DATA : any;
  data2;
  constructor(private route : ActivatedRoute , private service : GetDataService) { }

  ngOnInit() {
 
    this.service.get1().subscribe( (data1 ) => {
      this.DATA=data1;
      this.route.queryParams.subscribe ( param =>{
        this.ID = param.id;
        console.log(this.ID);
          })
  
         this.data2 = this.getDetails(this.ID); 
    })
    
  }

  getDetails(rid){
    for( let i=0 ;i<this.DATA.length;i++)
    {
      if(rid == this.DATA[i].id)
        return this.DATA[i];
    }
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 3121a85fec57b5b7c596ca4c5cd8dc09541c33e2
  }

}
