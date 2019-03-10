import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ToolsService } from '../../services/tools.service';

import { Party } from '../../models/party';
import { User } from '../../models/user';
import { World} from '../../models/world';
import { Sheet } from '../../models/sheet';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url     = 'http://localhost/pnpboardbackend/index.php';
  private module  = '?module=parties';
  private action  = '&action=';
  private param   = '&data';

  constructor(private http : HttpClient, private tools : ToolsService) { }

  public getIndex(){

    let action = this.action + 'index';

    return this.http.get<Party[]>(this.url + this.module + action);
  }

  public getParty(id : number){

    let action  = this.action + 'load';
    let data    = this.param + '[id]=' + id;
    
    return this.http.get<Party>(this.url + this.module + action + data);
  }

  public editParty(party : Party){

    let action  = this.action + 'edit';
    let data    = this.tools.objectToURLStr(party, this.param);

    return this.http.get<boolean>(this.url + this.module + action + data);
  }

  public addParty(party : Party){

    let action  = this.action + 'add';
    let data    = this.tools.objectToURLStr(party, this.param);

    return this.http.get<boolean>(this.url + this.module + action + data);
  }

  public deleteParty(id : number){

    let action  = this.action + 'delete';
    let data    = this.param + '[id]=' + id;

    return this.http.get<boolean>(this.url + this.module + action + data);
  }

  //Templates ###########################################################################

  public getUsersList(id : number){

    let action  = this.action + 'usersList';
    // let data    = this.param + '[id]=' + id;

    return this.http.get<User[]>(this.url + this.module + action);
  }

  public getWorldsList(){

    let action = this.action + 'worldsList';

    return this.http.get<World[]>(this.url + this.module + action);
  }

  public getSheetsList(id : number){

    let action  = this.action + 'sheetsList';
    let data    = this.param  + '[id]=' + id;

    return this.http.get<Sheet[]>(this.url + this.module + action + data);
  }
}