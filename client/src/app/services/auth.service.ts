import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line:variable-name
  private _registerUrl = 'http://localhost:3000/api/register';
  // tslint:disable-next-line:variable-name
  private _loginUrl = 'http://localhost:3000/api/login';


  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  registerUser(user: any){
    return this.http.post<any>(this._registerUrl, user);
  }

  // tslint:disable-next-line:typedef
  loginUser(user: any){
    return this.http.post<any>(this._loginUrl, user);
  }

}
