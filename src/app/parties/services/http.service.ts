import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ToolsService } from '../../services/tools.service';
import { AccountService } from '../../account/services/account/account.service';

import { BackendData } from '../../backendData';

import { Party } from '../../models/party';
import { User } from '../../models/user';
import { World} from '../../models/world';
import { Sheet } from '../../models/sheet';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url;
  private module  = '?module=parties';
  private action  = '&action=';
  private param   = '&data';
  private token   = '&data[token]=';

  constructor(
    private http  : HttpClient, 
    private tools : ToolsService,
    private acc   : AccountService
    ) {

    let data = new BackendData();
    this.url = data.domain;
   }

  public getIndex(){

    let action = this.action + 'index';
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<Party[]>(this.url + this.module + action + token);
  }

  public getParty(id : number){

    let action  = this.action + 'load';
    let data    = this.param + '[id]=' + id;
    let token   : string = this.token + this.acc.getToken();
    
    return this.http.get<Party>(this.url + this.module + action + data + token);
  }

  public editParty(party : Party){

    let action  = this.action + 'edit';
    let data    = this.tools.objectToURLStr(party, this.param);
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<boolean>(this.url + this.module + action + data + token);
  }

  public addParty(party : Party){

    let action  = this.action + 'add';
    let data    = this.tools.objectToURLStr(party, this.param);
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<boolean>(this.url + this.module + action + data + token);
  }

  public deleteParty(id : number){

    let action  = this.action + 'delete';
    let data    = this.param + '[id]=' + id;
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<boolean>(this.url + this.module + action + data + token);
  }

  //Templates ###########################################################################

  public getUsersList(id : number){

    let action  = this.action + 'usersList';
    // let data    = this.param + '[id]=' + id;
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<User[]>(this.url + this.module + action + token);
  }

  public getWorldsList(){

    let action = this.action + 'worldsList';
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<World[]>(this.url + this.module + action + token);
  }

  public getSheetsList(id : number){

    let action  = this.action + 'sheetsList';
    let data    = this.param  + '[id]=' + id;
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<Sheet[]>(this.url + this.module + action + data + token);
  }
}