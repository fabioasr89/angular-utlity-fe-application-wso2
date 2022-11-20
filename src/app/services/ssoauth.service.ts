import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { AuthConfig, OAuthService, UserInfo } from 'angular-oauth2-oidc';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SSOInterface } from './ssoInterface';
import { UserService } from './user.service';



export const authCodeFlowConfig: AuthConfig = {
  
  loginUrl:environment.wso2url.concat('/oauth2/authorize'),
  logoutUrl:environment.wso2url.concat('/oidc/logout'),
  issuer: environment.wso2url.concat('/oauth2/token'),
  redirectUri: "http://localhost:4200",
  clientId: environment.id_client,
  responseType: 'id_token token',
  tokenEndpoint:environment.wso2url.concat('/oauth2/token'),
  userinfoEndpoint:environment.wso2url.concat("/oauth2/userinfo"),
  revocationEndpoint:environment.wso2url.concat('/oauth2/revoke'),
  scope: 'openid profile identity',
  showDebugInformation: true,
  oidc:true,
  sessionChecksEnabled:true,
  requireHttps:true,
  requestAccessToken:true,
  skipSubjectCheck:true
};
@Injectable({
  providedIn: 'root'
})
export class SSOauthService implements SSOInterface,OnInit{

  authConfig:AuthConfig

  public username:string
  
  
  constructor(private ssoAuthService:OAuthService,private userService:UserService) { 
    this.authConfig=authCodeFlowConfig;
    this.ssoAuthService.configure(this.authConfig);
    this.ssoAuthService.tryLogin({});
  }
  ngOnInit(): void {
    
  }
  obtainAccessToken(): void {
    
    if(!this.ssoAuthService.hasValidAccessToken()){
      //faccio redirect alla pagina di login del server di autorizzazione
      console.log("Redirect in corso..");
      this.ssoAuthService.initImplicitFlow();
    }

  }
  //recupero l'access token
  getAccessToken(): string {
    console.log("Access token:"+this.ssoAuthService.getAccessToken())
    if(this.ssoAuthService.hasValidAccessToken()){
      
      return this.ssoAuthService.getAccessToken();
    }
    console.log("Token non valido")
    return "";
  }
  //verifico lo status dell'utente
  isLogin(): boolean {
    if(this.ssoAuthService.hasValidAccessToken()){
      return true;
    }
    console.log("Access token:"+this.getAccessToken())
    return false;
  }
  //recupero l'username dall'access token

   userInfo() :any{
    let username:string="";
    if(this.isLogin()){

      const claims = this.ssoAuthService.loadUserProfile();
      let promise:Promise<object>=this.ssoAuthService.loadUserProfile();
      let userinfoSubject$ = new ReplaySubject<UserInfo>();
      if(promise!=null){
        promise.then(userInfo=>{
        let user=userInfo as UserInfo
        console.log("user:"+JSON.stringify(user['info'].sub));
        this.userService.username=user['info'].sub;
      })
    }
     
    }else{
      return "anonimo";
    }
  }
  //eseguo il logut e definisco il reindirizzamento
  logout(): void {
     let promes:Promise<any>=this.ssoAuthService.revokeTokenAndLogout({
        client_id:this.authConfig.clientId,
        return_to:this.authConfig.redirectUri
     })
  }

  aggiornaInfoSessione():void{
    if(!this.isLogin()){
      this.userService.username="Anonimo"
    }else{
      this.userInfo();
    }
  }

  
  
}
