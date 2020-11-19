import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  registerUserData = {
    email: undefined,
    password: undefined
  };

  loginUserData = {
    email: undefined,
    password: undefined
  };



  // tslint:disable-next-line:variable-name
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  loginUser(){
    // console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        loginRes => console.log(loginRes),
        loginRes => console.log(loginRes)
      );
  }


  // tslint:disable-next-line:typedef
  registerUser(){
    // console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        registerRes => console.log(registerRes),
        registerRes => console.log(registerRes)
      );
  }

}
