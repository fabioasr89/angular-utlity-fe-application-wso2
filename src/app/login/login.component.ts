import { Component, OnInit, ViewChild } from '@angular/core';
import { SSOauthService } from '../services/ssoauth.service';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  disabledLogin:boolean=false;
  disabledLogout:boolean=true
  constructor(private ssoService:SSOauthService) { }
 
  
  ngOnInit(): void {
    if(this.ssoService.isLogin()){
      this.disabledLogin=true;
      this.disabledLogout=false;
    }
  }

  login(event:MouseEvent){
  
    this.ssoService.obtainAccessToken();
    console.log("Login")
  }

  logout(event:MouseEvent){
    this.ssoService.logout();
  }
}
