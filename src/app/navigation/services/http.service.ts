import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BackendData } from '../../backendData'

import { Navigation } from '../../models/navigation';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url     : string;
  private module  : string = '?module=navigation';
  private action  : string = '&action=';
  private data    : string = '&data';


  constructor(private http : HttpClient) {

      let data = new BackendData();
      this.url = data.domain;
   }


  public getNavigation(token : string){

    let data    : string = this.data + '[token]=' + token;
    this.action += 'index';

    return this.http.get<Navigation[]>(this.url + this.module + this.action + data);
  }  
}
