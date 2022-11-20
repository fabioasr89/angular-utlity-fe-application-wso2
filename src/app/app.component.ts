import { Component, OnInit } from '@angular/core';
import { SSOauthService } from './services/ssoauth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'utility-fe';
  sessionValue:any
  constructor(private ssoService:SSOauthService,public userService:UserService){

  }
  ngOnInit(): void {

    this.ssoService.aggiornaInfoSessione();
    

  }


 
}
