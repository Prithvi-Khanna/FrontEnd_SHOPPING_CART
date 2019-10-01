import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
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
  }

}
