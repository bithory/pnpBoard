import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Navigation } from '../../models/navigation';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url     : string = 'http://localhost:80/pnpboardbackend/index.php';
  private module  : string = '?module=navigation';
  private action  : string = '&action=';
  private data    : string = '&data';


  constructor(private http : HttpClient) { }


  public getNavigation(partyId : number){

    let data    : string = this.data + '[id]=' + partyId;
    this.action += 'index';

    return this.http.get<Navigation[]>(this.url + this.module + this.action + data);
  }  
}
