import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms'

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

  public userArr : Array<number>; //val for member
  public usersData: Array<User>;  //dataset for gm

  public worldId: number;
  public sheetId: number;
  public gmId   : number;

  public sheetsData : Array<Sheet>;

  private param : number;

  //Mocked data 
  //TODO: change to real data
  private parties : Array<Party> = MockParties;

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    
    console.log(this.party);

    this.usersData  = this.users;
    this.sheetsData = this.sheets;    
    this.userArr    = [];

    this.param = parseInt(this.route.snapshot.paramMap.get('id'));

    if(this.param === 0){

      this.party = {
        id    :   0,
        world :   MockWorlds[0],
        name  :   '',
        users :   MockUsers,
        gm    :   MockUsers[0],
        sheet :   MockSheets[0],
      };
    }
    else{

      this.party = this.parties.find(x => x.id === this.param);

      let userArr   : Array<number> = [];

      this.party.users.forEach(function(val){

        userArr.push(val.id);
      });

      this.userArr = userArr;
    }
    

    this.worldId  = this.party.world.id;
    this.sheetId  = this.party.sheet.id;
    this.gmId     = this.party.gm.id;
  }

  public gmChange(){

    this.party.gm = this.users.find(x => x.id == this.gmId);
  }

  public sheetChange(){

    this.party.sheet = this.sheets.find(x => x.id == this.sheetId);
  }

  public worldChange(){

    this.party.world  = this.worlds.find(x => x.id == this.worldId);

    let sheetArr  : Array<Sheet> = [];
    let worldId   : number = this.worldId;

    //find the shees which are related through the selected world
    this.sheets.forEach(function(val){

      if(val.worldId == worldId){

        console.log(val);
        sheetArr.push(val);
      }
    });

    this.sheetsData   = sheetArr;
    this.party.sheet  = this.sheets.find(x => x.worldId == this.worldId);

    //if needed reselect sheet
    if(!this.sheetsData.find(x => x.id == this.sheetId))
      this.sheetId = this.sheetsData[0].id;
  }

  public memberChange(){

    let party : Party       = this.party;
    let users : Array<User> = MockUsers;

    party.users = [];

    this.userArr.forEach(function(value){

      let key = users.findIndex(x => x.id === value);
      party.users.push(users[key]);
    });

    //set the values to party.users and overwrite userData
    //which is used for the gamemaster. so that the gamemaster got
    //only party member as selection optons
    this.party.users  = party.users;
    this.usersData    = party.users;

    //if needed reselect gm (gamemaster)
    if(!this.usersData.find(x => x.id == this.gmId))
      this.gmId = this.usersData[0].id;
  }

  public onSubmit(){

    this.router.navigate(["./parties"]);
  }
}
