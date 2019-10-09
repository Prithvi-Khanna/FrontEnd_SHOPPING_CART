import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Router } from '@angular/router';

console.log("homie");
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  Data;

  constructor(private router : Router , private service : GetDataService) {
    
   }

  ngOnInit() {
  this.service.get1().subscribe( (data1 ) => {
    this.Data=data1;
  } )
  }

  goTo(cate)
  {    
      this.router.navigate(['/product-list'] , { queryParams : {cat : cate }});
  }

}
