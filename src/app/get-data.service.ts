import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {


  constructor(private http : HttpClient) { 

  }

  get1(){
    
    return this.http.get('http://localhost:2019/product/get1');
  }

  getprice1(cate,sub_cate,first,last)
  { 
    console.log(first+" "+last);
    return this.http.get('http://localhost:2019/product/sub/'+cate+'/'+sub_cate+'/'+first+'/'+last);
  }

  get_cat(cate)
  {
    return this.http.get('http://localhost:2019/product/get_cate/'+cate);
  }

}
