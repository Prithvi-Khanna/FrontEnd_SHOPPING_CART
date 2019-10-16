import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUserService } from '../get-user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor( private service : GetUserService , private route : ActivatedRoute , private router : Router ) { }
   USER;
   user;
   pswd;
   ready =false;
  ngOnInit() {
 
    let user = sessionStorage.getItem('username')
    this.USER=user;

    this.service.get1_user(this.USER).subscribe( data => {
      this.user=data;
    })
    
    }

    isPassword()
    {
      if(this.pswd == this.user.password)
        return true;
       else
         return false; 
    }

    submit()
    {

        this.ready = this.isPassword();
        if(this.isPassword())
        {
          this.service.put_user(this.user).subscribe( data => {

          })
          alert("Your details has been changed... ");
        }
         
       
    }

}
