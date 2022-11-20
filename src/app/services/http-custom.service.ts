import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterface } from './httpInterface';

@Injectable({
  providedIn: 'root'
})
export class HttpCustomService implements HttpInterface{

  constructor(private http:HttpClient) { }
  
  post(url: string, body: any): Observable<any> {
    return this.http.post(url,body);
  }
  get(url: string): Observable<any> {
    return this.http.get(url)
  }



}
