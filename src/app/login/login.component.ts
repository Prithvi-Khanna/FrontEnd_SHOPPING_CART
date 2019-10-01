import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private service : GetUserService ) { }

  DATA : any;

  ngOnInit() {
  }

  Onsubmit_login(username1,password)
  {
   this.service.get1_user(username1).subscribe(
    (data) => {
      this.DATA = data;
      if( this.DATA[0].username == username1 && this.DATA[0].password == password)
      {
        location.assign('/home');
      }
      else
      alert("Wrong Credentials"); 
    } ,
    error => console.log("ERROR" , error)
   )
  }

  Sign()
  {
    location.assign('/sign-up');
  }

}
