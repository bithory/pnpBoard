import { Component, OnInit } from '@angular/core';

import { Party } from '../../models/party';

import { ToolsService } from '../../services/tools.service';

import { MockParties } from '../../mockupData/mockParties';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public parties  : Array<Party> = MockParties;
  public member   = '';

  constructor(private tools : ToolsService) { }

  ngOnInit() {

    console.log(this.parties);
  }

  delete(id : number){

    let partyKey : number = this.parties.findIndex(x => x.id === id);
    
    this.parties = this.tools.delSingleArrElem(partyKey, this.parties);
  }

}
