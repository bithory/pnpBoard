import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from '../../services/tools.service';

import { Note } from '../../models/note';
import { User } from '../../models/user';
import { Tag } from '../../models/tag';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private url     : string = 'http://localhost/pnpboardbackend/index.php';
  private module  : string = '?module=notes';
  private action  : string = '&action=';
  private param   : string = '&data';

  constructor(private http : HttpClient, private tools : ToolsService) { }

  public getIndex(partyId : number, userId : number){

    let action  : string = this.action + 'index';
    let data    : string = this.param + '[partyId]=' + partyId;
    data += this.param + '[userId]=' + userId;

    return this.http.get<Note[]>(this.url + this.module + action + data);
  }

  public getNote(id : number){

    let action  : string = this.action + 'load';
    let data    : string = this.param + '[id]='  + id;

    return this.http.get<Note>(this.url + this.module + action + data);
  }

  public editNote(note : Note){

    let action  : string = this.action + 'edit';
    let data    : string = this.tools.objectToURLStr(note, this.param);

    return this.http.get<boolean>(this.url + this.module + action + data);
  }

  public addNote(note : Note){

    let action  : string = this.action + 'add';
    let data    : string = this.tools.objectToURLStr(note, this.param);

    return this.http.get<boolean>(this.url + this.module + action + data);
  }

  public deleteNote(id : number){

    let action  : string = this.action + 'delete';
    let data    : string = this.param + '[id]=' + id;

    return this.http.get<boolean>(this.url + this.module + action + data);
  }

  //Templates ###########################################################################
  //Die User und die Tags die der Party zugehörig sind

  public getParyUsersList(partyId : number){

    let action  : string = this.action + 'usersList';
    let data    : string = this.param + '[partyId]=' + partyId;

    return this.http.get<Array<User>>(this.url + this.module + action + data);
  }

  public getNotesTagsList(partyId : number){

    let action  : string  = this.action + 'tagsList';
    let data    : string  = this.param + '[partyId]=' + partyId;

    return this.http.get<Tag[]>(this.url + this.module + action + data);
  }
}
