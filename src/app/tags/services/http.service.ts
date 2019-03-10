import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from '../../services/tools.service';

import { Tag } from '../../models/tag';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  private url     = 'http://localhost/pnpboardbackend/index.php';
  private module  = '?module=tags';
  private action  = '&action=';
  private param   = '&data';

  constructor(private http : HttpClient, private tools : ToolsService) { }

  public getIndex(id : number){

    let action  = this.action + 'index';
    let data    = this.param + '[id]=' + id;

    return this.http.get<Tag[]>(this.url + this.module + action + data);
  }

  public getTag(id : number){

    let action  = this.action + 'load';
    let data    = this.param + '[id]=' + id;
    
    return this.http.get<Tag>(this.url + this.module + action + data);
  }

  public editTag(tag : Tag){

    let action  = this.action + 'edit';
    let data    = this.tools.objectToURLStr(tag, this.param);

    return this.http.get<boolean>(this.url + this.module + action + data);
  }

  public addTag(tag : Tag){

    let action  = this.action + 'add';
    let data    = this.tools.objectToURLStr(tag, this.param);

    return this.http.get<boolean>(this.url + this.module + action + data);
  }

  public deleteTag(id : number){

    let action  = this.action + 'delete';
    let data    = this.param + '[id]=' + id;

    return this.http.get<boolean>(this.url + this.module + action + data);
  }
}
