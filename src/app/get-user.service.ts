import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http : HttpClient) { }

  get1_user(username){
    return this.http.get('http://localhost:2019/users/get_user/'+username);
  }

  post1_user( posts : posts)
  {
    return this.http.post<any>('http://localhost:2019/users/post1' , posts , { headers : new HttpHeaders( { 'Content-Type' : 'application/json' } )});
  }

  put_user(user)
  {
   const headers = new HttpHeaders({Authorization : sessionStorage.getItem('basicauth')}); 
    return this.http.put<any>('http://localhost:2019/users/put_user' , user , {headers} );
  }
}
