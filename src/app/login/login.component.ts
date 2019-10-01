import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private service : GetUserService ) { }

  ngOnInit() {
  }

  Onsubmit_login()
  {
    location.assign('/home');

    
  }

  Sign()
  {
    location.assign('/sign-up');
  }

}
