import { Component, OnInit } from '@angular/core';
import { SSOauthService } from '../services/ssoauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ssoService:SSOauthService) {
   
   }

  ngOnInit(): void {
    if(this.ssoService.isLogin()){
      //console.log("Access token:"+this.ssoService.getAccessToken())
      //console.log("User info:"+this.ssoService.userInfo(this.ssoService.getAccessToken()))
    }
    if(this.ssoService.isLogin() && !sessionStorage.getItem('access_token')){
      //sessionStorage.setItem('api_token',this.ssoService.getAccessToken());
    }
  }

}
