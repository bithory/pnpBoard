import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Note } from '../../models/note';
import { Tag } from '../../models/tag';
import { User } from '../../models/user';
import { Party } from '../../models/party';

import { MockNotes } from '../../mockupData/mockNotes';
import { MockUsers } from '../../mockupData/mockUsers';
import { MockTags } from '../../mockupData/mockTags';
import { MockParties } from '../../mockupData/mockParties';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private userId  : number = 1;
  public partyId : number;

  public notes  : Array<Note>;
  public tags   : Array<Tag>;
  public users  : Array<User>;
  public parties: Array<Party>;

  public readUsers : Array<number>;
  
  private party : Party;

  public isActField : boolean;
  public hidden     : string;

  public note : Note;

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {

    let id        : number  = parseInt(this.route.snapshot.paramMap.get('id'));
    let mode      : string  = this.route.snapshot.paramMap.get('mode');
    this.partyId            = parseInt(this.route.snapshot.paramMap.get('partyId'));

    this.notes  = MockNotes;
    this.parties= MockParties;

    this.party  = this.parties.find(x => x.id === this.partyId);
    this.users  = this.party.users;
    
    let partyId               = this.partyId;
    let tagArr  : Array<Tag>  = [];
    this.tags                 = MockTags;

    this.tags.forEach(function(val){

      if(val.partyId == partyId)
        tagArr.push(val);
    });

    this.tags = tagArr;

    if(mode === 'new'){

      this.note = {
        id      : 0,
        name    : '',
        text    : '',
        userId  : this.userId,
        partyId : this.partyId,
        read    : [],
        tags    : [],
        date    : '',
      };      
    }
    else{

      this.note = this.notes.find(x => x.id === id);

      if(mode === 'view'){

        this.isActField = true;
        this.hidden     = 'd-none';
      }
      else{

        this.isActField = false;
        this.hidden     = '';
      }
    }
    
    let readTmp   : Array<number> = [];
    let usersTmp  : Array<User>   = this.users;

    this.note.read.forEach(function(val){

      let currentUser = usersTmp.find(x => x.id == val);
      readTmp.push(currentUser.id);
    });

    this.readUsers = readTmp;
  }

  public changeRead(){

    console.log(this.readUsers);
    this.note.read = this.readUsers;
    console.log(this.note.read);
  }

  private onSubmit(){

    this.router.navigate(["./notes/" + this.partyId]);
  }
}
