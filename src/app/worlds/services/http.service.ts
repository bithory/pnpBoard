import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BackendData } from '../../backendData';

import { User } from '../../models/user';
import { World } from '../../models/world';

import { Observable } from 'rxjs';
import { ToolsService } from '../../services/tools.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url         : string;
  private module      : string = '?module=worlds';
  private action      : string = '&action=';
  private data        : string = '&data';

  constructor(private http : HttpClient, private tools : ToolsService) {

    let data = new BackendData();
    this.url = data.domain;
   }

  public getWorldList(){
    
    let action : string = this.action + 'index';

    return this.http.get<World[]>(this.url + this.module + action);
  }

  public getWorld(id : number){

    let action : string = this.action + 'load';
    let param : string  = this.data + '[id]=' + id;

    return this.http.get<World>(this.url + this.module + action + param);
  }

  public editWorld(world : World){

    let action  : string = this.action + 'edit';
    let param   : string = '';
    let data    : string = this.data;

    //automatisches formatieren eines Objektes zu einem Array
    // param = this.objectToURLStr(world);
    param = this.tools.objectToURLStr(world, this.data);

    return this.http.get<boolean>(this.url + this.module + action + param);
  }

  public addWorld(world : World){

     let action : string = this.action + 'add';
     let param  : string = '';
     let data   : string = this.data;

    //  param = this.objectToURLStr(world);
      param = this.tools.objectToURLStr(world, this.data);

     return this.http.get<boolean>(this.url + this.module + action + param);
  }

  public deleteWorld(id : number){

    let action : string = this.action + 'delete';
    let param : string  = this.data + '[id]=' + id;

    return this.http.get<boolean>(this.url + this.module + action + param);
  }
}
