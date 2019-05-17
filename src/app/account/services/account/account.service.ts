import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../http.service'

import { Login } from '../../../models/login'
import { timeout } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private loginStatus : Login = {
    status  : false,
    token   : '',
  };

  private counter = 0;

  constructor(private http : HttpService, private router : Router) { }

  public login(token : string){

    window.localStorage.setItem('token', token);

    setTimeout(function(){

      console.log(this.counter++);
    }, 1000);
  }

  public checkLogin() : Login {

    let token : string = localStorage.getItem('token');

    if(token != undefined){
      this.loginStatus.status = true;
      this.loginStatus.token  = token;
    }

    return this.loginStatus;
  }

  public getToken() : string{

    //to check if the login is set and bind the token to loginStatus
    this.checkLogin();

    return this.loginStatus.token;
  }

  public logout() : void{

    let token : string = window.localStorage.getItem('token');
    let link  : string = '';
    let status = {
      status  : false,
      msg     : '',
    }

    this.http.logout(token).subscribe(x => {

      status = x;

      if(x.status == true){

        window.localStorage.removeItem('token');

        this.router.navigate([link]);
      }
    });
  }
}
