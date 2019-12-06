import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from '../../services/tools.service';
import { AccountService } from '../../account/services/account/account.service';

import { BackendData } from '../../backendData';

import { Note } from '../../models/note';
import { User } from '../../models/user';
import { Tag } from '../../models/tag';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private url     : string;
  private module  : string = '?module=notes';
  private action  : string = '&action=';
  private token   : string = '&data[token]=';
  private param   : string = '&data';

  constructor(private http : HttpClient, private tools : ToolsService, private acc : AccountService) { 

    let data = new BackendData();
    this.url = data.domain;
  }

  public getIndex(partyId : number){

    let action  : string = this.action + 'index';
    let data    : string = this.param + '[partyId]=' + partyId;
    let token   : string = this.token + this.acc.getToken();

    // data += this.param + '[userId]=' + userId;

    return this.http.get<Note[]>(this.url + this.module + action + data + token);
  }

  public getNote(id : number){

    let action  : string = this.action + 'load';
    let data    : string = this.param + '[id]='  + id;   
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<Note>(this.url + this.module + action + data + token);
  }

  public editNote(note : Note){

    let action  : string = this.action + 'edit';
    let data    : string = this.tools.objectToURLStr(note, this.param);   
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<boolean>(this.url + this.module + action + data + token);
  }

  public addNote(note : Note){

    let action  : string = this.action + 'add';
    let data    : string = this.tools.objectToURLStr(note, this.param);   
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<boolean>(this.url + this.module + action + data + token);
  }

  public deleteNote(id : number){

    let action  : string = this.action + 'delete';
    let data    : string = this.param + '[id]=' + id;   
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<boolean>(this.url + this.module + action + data + token);
  }

  public searchNotes(search : string, partyId : number){

    let action  : string = this.action + 'search';
    let data    : string = this.param + '[search]=' + search + this.param + '[id]=' + partyId;
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<Note[]>(this.url + this.module + action + data + token);
  }

  //Templates ###########################################################################
  //Die User und die Tags die der Party zugehörig sind

  public getParyUsersList(partyId : number){

    let action  : string = this.action + 'usersList';
    let data    : string = this.param + '[partyId]=' + partyId;   
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<Array<User>>(this.url + this.module + action + data + token);
  }

  public getNotesTagsList(partyId : number){

    let action  : string  = this.action + 'tagsList';
    let data    : string  = this.param + '[partyId]=' + partyId;   
    let token   : string  = this.token + this.acc.getToken();

    return this.http.get<Tag[]>(this.url + this.module + action + data + token);
  }
}
