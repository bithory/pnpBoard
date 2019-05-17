import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from '../../services/tools.service';

import { User } from '../../models/user';
import { Login } from '../../models/login';
import { Status } from '../../models/status';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url     = 'http://localhost/pnpboardbackend/index.php';
  private module  = '?module=account';
  private action  = '&action=';
  private token   = '&data[token]=1';
  private param   = '&data';

  constructor(private http : HttpClient, private tools : ToolsService) { }

  public loginUser(user : User){

    let action  : string = this.action + 'login';
    let data    : string = this.tools.objectToURLStr(user, this.param);

    return this.http.get<Login>(this.url + this.module + action + data);
  }

  public registerUser(user : User){

    let action  : string = this.action + 'add';
    let data    : string = this.tools.objectToURLStr(user, this.param);

    return this.http.get<boolean>(this.url + this.module + action + data);
  }

  public logout(token : string){

    let action  : string = this.action + 'logout';
    let data    : string = this.param + '[token]=' + token;

    return this.http.get<Status>(this.url + this.module + action + data);
  }
}