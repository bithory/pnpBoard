import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from '../../services/tools.service';
import { AccountService } from '../../account/services/account/account.service';

import { BackendData } from '../../backendData'

import { User } from '../../models/user';
import { Login } from '../../models/login';
import { Status } from '../../models/status';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url;
  private module  = '?module=account';
  private action  = '&action=';
  private token   = '&data[token]=';
  private param   = '&data';

  constructor(
    private http  : HttpClient, 
    private tools : ToolsService, 
    private acc   : AccountService
    ) {

    let data = new BackendData();
    this.url = data.domain;
   }

  public loginUser(user : User){

    let action  : string = this.action + 'login';
    let data    : string = this.tools.objectToURLStr(user, this.param);
    // let token   : string = this.token + this.acc.getToken();

    return this.http.get<Login>(this.url + this.module + action + data);
  }

  public registerUser(user : User){

    let action  : string = this.action + 'register';
    let data    : string = this.tools.objectToURLStr(user, this.param);
    // let token   : string = this.token + this.acc.getToken();

    return this.http.get<Status>(this.url + this.module + action + data);
  }

  public logout(param : string){

    let action  : string = this.action + 'logout';
    let data    : string = this.param;
    let token   : string = this.token + this.acc.getToken();

    console.log(this.url + this.module + action + token);
    // return this.http.get<Status>(this.url + this.module + action + token);
  }

  public getProfile(){
    let action  : string = this.action + 'load';
    let data    : string = this.param;
    let token   : string = this.token + this.acc.getToken();
  }
}