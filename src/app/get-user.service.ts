import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http : HttpClient) { }

  get1_user(){
    return this.http.get('assets/users.json');
  }

  post1_user( posts : posts)
  {
    return this.http.post<any>('http://localhost:2019/users/post1' , posts , { headers : new HttpHeaders( { 'Content-Type' : 'application/json' } )});
  }
}
