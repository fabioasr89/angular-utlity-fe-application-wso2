import { Observable } from "rxjs";

export interface HttpInterface{

    post(url:string,body:any):Observable<any>;

    get(url:string):Observable<any>;

}