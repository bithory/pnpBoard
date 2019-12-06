import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// import { HttpService } from '../http.service'
import { BackendData } from '../../../backendData'

import { Login } from '../../../models/login';
import { Status } from '../../../models/status';

import { NavbarHorizontalComponent } from '../../../navigation/navbar-horizontal/navbar-horizontal.component'
import { Subject } from 'rxjs';

// import { timeout } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private loginStatus : Login = {

    status    : false,
    token     : '',
    timestamp : 0,
  };

  private loginStat = new Subject<boolean>();
  public  loginObs$ = this.loginStat.asObservable();

  private counter = 0;

  constructor(private http : HttpClient, private router : Router) { }

  public navReload(log : boolean){

    this.loginStat.next(log);
  }

  public login(token : string, timestamp : number){

    window.localStorage.setItem('token', token);
    window.localStorage.setItem('timestamp', '' + timestamp);

    this.navReload(true);
  }

  public checkLogin() : Login {

    let token  = localStorage.getItem('token');

    if(token != undefined){

      this.loginStatus.status = true;
      this.loginStatus.token  = token;
    }

    return this.loginStatus;
  }

  public checkTimeOutdate(){

    let maxTime : number  = 30 * 60; //<chosen time> * <minute factor>
    let tmp     : number  = Date.now() / 1000;

    let timestamp : number  = Number(localStorage.getItem('timestamp'));
    let actTime   : number  = parseInt("" + tmp, 10);

    if((timestamp + maxTime) < actTime && !Number.isNaN(timestamp) && timestamp != 0){
      
      this.logout();
    }
  }

  public getToken() : string{

    //to check if the login is set and bind the token to loginStatus
    this.checkLogin();

    return this.loginStatus.token;
  }

  public logout() : void{

    let token : string = window.localStorage.getItem('token');
    let link  : string = './account/login';
    let status = {

      status  : false,
      msg     : '',
    }

    if(localStorage.getItem('timestamp') != null){
      
      this.sendLogout(token).subscribe(x => {

        // status = x;

        if(x.status == true){
          window.localStorage.removeItem('token');
          window.localStorage.removeItem('timestamp');
          this.navReload(false);

          this.router.navigate([link]);
        }
      });
    }
  }
  
  public sendLogout(param : string){

    let urlModule : string = '?module=account';
    let action    : string = '&action=logout';
    let token     : string = '&data[token]=' + this.getToken();

    let data : BackendData  = new BackendData();
    let url  : string       = data.domain;

    return this.http.get<Status>(url + urlModule + action + token);
  }
}
