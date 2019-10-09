import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  
  Data;
  Data_cat;
  cate;
  first;
  last;
  sub1;

  price1 = { "first" : "" , "last" : "" };
  sub_cate1 = "";
  constructor(private route : ActivatedRoute , private service : GetDataService , private router : Router) {
    
   }
   
   prices = [
      { "first" : 0 , "last" : 1999},
      { "first" : 2000 , "last" : 4999},
      { "first" : 5000 , "last" : 8999},
      { "first" : 9000 , "last" : 12999},
      { "first" : 13000 , "last" : 15999},
      { "first" : 16000 , "last" : 19999},
      { "first" : 20000 , "last" : 1000000}
   ];

   sub = [
    'T-shirt',
    'Jeans',
    'Shoes',
    'Phone',
    'Headphones',
    'Novel',
    'Biography',
    'Cricket',
    'Football',
    'Badminton'
   ]

  ngOnInit() {

  this.route.queryParams.subscribe ( param =>{
    this.cate = param.cat;
  this.service.get_cat(this.cate).subscribe( (data1 ) => {
    this.Data=data1;
        }) 
 })

}

  goToDetails(id1)
  {
    console.log(id1);
      this.router.navigate(['/product-details'] , { queryParams : {id : id1 }});
  }

  get_cate1(category)
  {
    this.service.get_cat(category).subscribe( (data2) => {
      this.Data_cat = data2;
    })
  }

  goTo(cate)
  {    
      this.router.navigate(['/product-list'] , { queryParams : {cat : cate }});
  }

  submitfilter1($event,s)
  {
    this.sub_cate1=s;
    console.log(s);
    console.log(this.price1.first);
    console.log(this.price1.last);
   console.log(this.cate);
    this.service.getprice1(this.cate,this.sub_cate1,this.price1.first,this.price1.last).subscribe( (data) => {
      this.Data=data;
    })
    
  }
  submitfilter2($event,first,last)
  {
    this.price1.first=first;
    this.price1.last=last;
    console.log(this.price1.first);
    console.log(this.price1.last);
    console.log(this.sub_cate1);
  }
}
