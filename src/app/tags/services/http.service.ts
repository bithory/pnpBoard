import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from '../../services/tools.service';
import { AccountService } from '../../account/services/account/account.service';

import { BackendData } from '../../backendData';

import { Tag } from '../../models/tag';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  private url;
  private module  = '?module=tags';
  private action  = '&action=';
  private param   = '&data';
  private token   = '&data[token]='

  constructor(
    private http  : HttpClient, 
    private tools : ToolsService,
    private acc   : AccountService
    ) {

    let data = new BackendData();
    this.url = data.domain;
   }

  public getIndex(id : number){

    let action  = this.action + 'index';
    let data    = this.param + '[id]=' + id;
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<Tag[]>(this.url + this.module + action + data + token);
  }

  public getTag(id : number){

    let action  = this.action + 'load';
    let data    = this.param + '[id]=' + id;
    let token   : string = this.token + this.acc.getToken();
    
    return this.http.get<Tag>(this.url + this.module + action + data + token);
  }

  public editTag(tag : Tag){

    let action  = this.action + 'edit';
    let data    = this.tools.objectToURLStr(tag, this.param);
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<boolean>(this.url + this.module + action + data + token);
  }

  public addTag(tag : Tag){

    let action  = this.action + 'add';
    let data    = this.tools.objectToURLStr(tag, this.param);
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<boolean>(this.url + this.module + action + data + token);
  }

  public deleteTag(id : number){

    let action  = this.action + 'delete';
    let data    = this.param + '[id]=' + id;
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<boolean>(this.url + this.module + action + data + token);
  }
}
