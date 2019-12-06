import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BackendData } from '../../backendData'
import { AccountService } from '../../account/services/account/account.service';

import { Navigation } from '../../models/navigation';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url     : string;
  private module  : string = '?module=navigation';
  private action  : string = '&action=';
  private data    : string = '&data';
  private token   : string = '&data[token]=';


  constructor(private http : HttpClient, private acc : AccountService) {

      let data = new BackendData();
      this.url = data.domain;
   }


  public getNavigation(param : string){

    let data    : string = this.data;
    this.action += 'index';
    let token   : string = this.token + this.acc.getToken();

    return this.http.get<Navigation[]>(this.url + this.module + this.action + data + token);
  }  
}
