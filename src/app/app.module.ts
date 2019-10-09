import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { GetDataService } from './get-data.service';
import { GetUserService } from './get-user.service';
import { FormsModule } from '@angular/forms'; 
import { BasicAuthService } from './basic-auth.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomePageComponent,
    UserCartComponent,
    ProductDetailsComponent,
    ProductListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetDataService,GetUserService, AuthService,{  
    provide:HTTP_INTERCEPTORS, useClass: BasicAuthService, multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
