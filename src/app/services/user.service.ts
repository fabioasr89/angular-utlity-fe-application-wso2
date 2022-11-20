import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public username:any
  public isLogged: boolean;
  constructor() { }
}
