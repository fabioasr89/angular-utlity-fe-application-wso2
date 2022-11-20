import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { error } from "jquery";
import { catchError, Observable, throwError } from "rxjs";
import { SSOauthService } from "../services/ssoauth.service";
@Injectable()
export class HttpCustomInterceptor implements HttpInterceptor{
    
    constructor(private ssoService:SSOauthService){

    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if(this.ssoService.isLogin()){
            req.headers.append('ACCESS_TOKEN',this.ssoService.getAccessToken())
        }

        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('Si è verificato un errore lato client');
            errorMsg = `Error: ${error.error.message}`;
          }
          else {
            console.log('Errore lato server');
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          }
          console.log(errorMsg);
          return throwError(errorMsg);
        })
      )
     }
}
    
