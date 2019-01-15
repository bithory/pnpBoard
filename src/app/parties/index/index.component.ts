import { Component, OnInit } from '@angular/core';

import { Party } from '../../models/party';
import { MockParties } from '../../mockupData/mockParties';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public parties  : Array<Party> = MockParties;
  public member   = '';

  constructor() { }

  ngOnInit() {

    console.log(this.parties);
  }

  delete(id : number){

    let partyKey : number = this.parties.findIndex(x => x.id === id);

    let arrayStart  : Array<Party> = this.parties.slice(0, partyKey);
    let arrayEnd    : Array<Party> = this.parties.slice(partyKey + 1);

    this.parties = arrayStart.concat(arrayEnd);
  }

}
