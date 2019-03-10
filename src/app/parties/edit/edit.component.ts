import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { HttpService } from '../services/http.service';

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
  styleUrls: ['./edit.component.css'],
  styles:['.no-block{display : inline;}'],
})
export class EditComponent implements OnInit {

  //Select Templates
  public sheetsList   : Array<Sheet>;
  public usersList    : Array<User>;
  public gmsList      : Array<User>;
  public worldsList   : Array<World>;

  //Data Object
  public party : Party;

  //Data bindings
  public worldId    : number;
  public sheetId    : number;
  public gmId       : number;
  public membersId  : Array<Number>;

  //HTML options
  public isActField : boolean;
  public hidden     : string;

  public world : World;

  private id    : number;
  private mode  : string;

  constructor(private route : ActivatedRoute, private router : Router, private http : HttpService) { }

  ngOnInit() {

    this.id     = parseInt(this.route.snapshot.paramMap.get('id'));
    this.mode    = this.route.snapshot.paramMap.get('mode')

    this.getTemplates();
    
    this.party = {
      id    :   0,
      world :   MockWorlds[0],
      name  :   '',
      users :   MockUsers,
      gm    :   MockUsers[0],
      sheet :   MockSheets[0],
    };

    this.world = this.party.world;

    //divide between new or edit mode
    if(this.mode != 'new'){

      this.getData();

      if(this.mode === 'view'){

        this.isActField = true;
        this.hidden   = 'd-none';
      }
      else{

        this.isActField = false;
        this.hidden   = '';
      }
    }
  }

  private getData(){

    this.http.getParty(this.id).subscribe(data =>{
      
      this.party    = data;
      this.gmsList  = data.users;      
      this.sheetId  = data.sheet.id;
      this.gmId     = data.gm.id;

      let worldKey = this.worldsList.findIndex(x => x.id == data.world.id);
      this.worldId = this.worldsList[worldKey].id;
      

      let members : Array<number> = [];
      
      data.users.forEach(function(value, index){

        members[index] = value.id;
      });

      this.membersId = members;
    });
  }

  private getTemplates(){

    this.http.getUsersList(0).subscribe(data =>{

      this.usersList  = data;
    });
    // this.http.getSheetsList(this.id).subscribe(data => this.sheetsList = data);
    this.http.getWorldsList().subscribe(data => this.worldsList = data);

    if(this.mode != 'new')
      this.getSheetsList();
  }

  public gmChange(){

  }

  public getSheetsList(){

    this.http.getSheetsList(this.worldId).subscribe(data => {

      if(data[0] != null){
        
        this.sheetsList   = data;
        this.party.sheet  = this.sheetsList[0];
        this.sheetId      = this.party.sheet.id;
      }
      else{
        
        this.sheetsList   = [];
        this.sheetId      = 0;
      }


      // console.log(this.sheetId);
    });
  }

  public worldChange(){

    // console.log(this.worldId);

    let key = this.worldsList.findIndex(x => x.id == this.worldId);
    this.party.world = this.worldsList[key];

    this.getSheetsList();
  }

  public sheetChange(){

    let key           = this.sheetsList.findIndex(x => x.id == this.sheetId);
    this.party.sheet  = this.sheetsList[key];
  }

  public memberChange(){

    let member    : Array<User> = [];
    let usersList : Array<User> = this.usersList;
    let i : number = 0;

    console.log(this.usersList);

    this.membersId.forEach(function(value){

      let key : number = usersList.findIndex(x => x.id == value);
      member[i++] = usersList[key];
    });

    this.party.users  = member;
    this.gmsList      = member;

    let gmKey : number = this.gmsList.findIndex(x => x.id == this.gmId);

    if(gmKey == -1){

      this.gmId         = this.gmsList[0].id;
      this.party.gm.id  = this.gmId;
    }
  }

  public onSubmit(){

    if(this.mode == 'new'){
      
      this.http.addParty(this.party).subscribe(data => {
        
        this.router.navigate(["./parties"]);
      });
    }
    else{

      this.http.editParty(this.party).subscribe(data =>{

        this.router.navigate(['./parties']);
      })
    }
  }
}
