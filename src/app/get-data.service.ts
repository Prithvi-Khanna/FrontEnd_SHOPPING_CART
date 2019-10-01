import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {


  constructor(private http : HttpClient) { 

  }

  get1(){
    return this.http.get('assets/prod-list.json');
  }
}
