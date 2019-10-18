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

  get_search(SEARCH)
  {
    return this.http.get('http://localhost:2019/product/search/'+SEARCH);
  }

  getsub(cate,sub)
  {
    return this.http.get('http://localhost:2019/product/'+cate+'/'+sub);
  }

  getprice(cate,first,last)
  {
    return this.http.get('http://localhost:2019/product/'+cate+'/'+first+'/'+last);
  }

  get_sub_price(cate,sub,first,last)
  {
    return this.http.get('http://localhost:2019/product/sub/'+cate+'/'+sub+'/'+first+'/'+last);
  }

  get_cat(cate)
  {
    return this.http.get('http://localhost:2019/product/get_cate/'+cate);
  }
  
  addto(id)
  {
    return this.http.get('http://localhost:2019/cart/addtocart/recieve/'+id);
  }

  getcart()
  {
    return this.http.get('http://localhost:2019/cart/showcart/recieve');
  }

  increase1(id)
  {
    return this.http.get('http://localhost:2019/cart/addtocart/recieve/'+id);
  }

  decrease1(id)
  {
    return this.http.get('http://localhost:2019/cart/removefromcart/recieve/'+id);
  }

  remove1(id)
  {
    return this.http.get('http://localhost:2019/cart/remove1fromcart/recieve/'+id);
  }

  checkout()
  {
    return this.http.get('http://localhost:2019/cart/checkout/recieve');
  }

  clear()
  {
    return this.http.get('http://localhost:2019/cart/clearcart/recieve');
  }

  gethistory()
  {
    return this.http.get('http://localhost:2019/cart/history/recieve');
  }

  post_item(item)
  {
    return this.http.post<any>('http://localhost:2019/product/post1' , item , { headers : new HttpHeaders( { 'Content-Type' : 'application/json' } )});
  }

  get_id(id)
  {
    return this.http.get('http://localhost:2019/product/get1/'+id); 
  }

  put_item(item)
  {
    return this.http.post<any>('http://localhost:2019/product/post1' , item , { headers : new HttpHeaders( { 'Content-Type' : 'application/json' } )});
  }
}
