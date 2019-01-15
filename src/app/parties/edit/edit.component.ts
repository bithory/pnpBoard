import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Party } from '../../models/party';
import { User } from '../../models/user';
import { Sheet } from '../../models/sheet';
import { World } from 'src/app/models/world';

import { MockUsers } from '../../mockupData/mockUsers';
import { MockParties } from '../../mockupData/mockParties';
import { MockWorlds } from 'src/app/mockupData/mockWorlds';
import { MockSheets } from 'src/app/mockupData/mockSheets';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public party  : Party;
  public sheets : Array<Sheet>  = MockSheets;
  public users  : Array<User>   = MockUsers;
  public worlds : Array<World>  = MockWorlds;

  public formUser : Array<string>;

  public sheetData : Sheet;

  private param : number;

  //Mocked data 
  //TODO: change to real data
  private parties : Array<Party> = MockParties;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    
    console.log(this.sheets);

    this.param = parseInt(this.route.snapshot.paramMap.get('id'));

    if(this.param === 0){

      this.party = {
        id :      0,
        world :   MockWorlds[0],
        name :    '',
        users :   MockUsers,
        gm :      MockUsers[0],
        sheet :   MockSheets[0],
      };
    }
    else{

      this.party = this.parties.find(x => x.id === this.param);
    }

    console.log(this.party);

    // let partyList : Array<Party> = MockParties;
    // this.party = partyList[0];
  }

  public memberChange(){

    console.log(this.formUser);
  }

  public onSubmit(){}
}
