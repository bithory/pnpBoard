import { Component, OnInit } from '@angular/core';

import { Party } from '../../models/party';

import { ToolsService } from '../../services/tools.service';
import { HttpService } from '../services/http.service';

import { MockParties } from '../../mockupData/mockParties';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  // public parties  : Array<Party> = MockParties;
  public parties  : Array<Party>;
  public member   = '';

  constructor(private tools : ToolsService, private http : HttpService) { }

  ngOnInit() {

    // console.log(this.parties);
    this.getData();
  }

  private getData(){

    this.http.getIndex().subscribe(data => this.parties = data);
  }

  delete(id : number){

    // let partyKey : number = this.parties.findIndex(x => x.id === id);    
    // this.parties = this.tools.delSingleArrElem(partyKey, this.parties);

    let check : boolean = false;
    this.http.deleteParty(id).subscribe(data => check = data);
    this.getData();
  }

}
