import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { NgForm } from '@angular/forms';

import { Note } from '../../models/note';
import { Tag } from '../../models/tag';
import { User } from '../../models/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  styles:['.no-block{display : inline;}'],
})
export class EditComponent implements OnInit {

  private userId  : number = 1;
  private noteId  : number;
  public partyId : number;

  public notes  : Array<Note>;
  public tags   : Array<Tag>;
  public users  : Array<User>;

  public readData : Array<number>;
  public tagData  : Array<number>;

  public isActField : boolean;
  public hidden     : string;

  public note : Note;

  public editor : string = '';
  public editorTest : string = '';

  quillConfig={
    toolbar: true,
  }

  constructor(private route : ActivatedRoute, private router : Router, private http : HttpService) { }

  ngOnInit() {

    this.noteId             = parseInt(this.route.snapshot.paramMap.get('id'));
    let mode      : string  = this.route.snapshot.paramMap.get('mode');
    this.partyId            = parseInt(this.route.snapshot.paramMap.get('partyId'));
    
    let partyId             = this.partyId;
    
    this.tags   = [];
    this.users  = [];

    this.getTemplates();

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

    if(mode !== 'new'){

      this.getData();

      if(mode === 'view'){

        this.isActField = true;
        this.hidden     = 'd-none';
      }
      else{

        this.isActField = false;
        this.hidden     = '';
      }
    }
    
  }

  private getData() : void {

    // this.http.getNote(this.noteId).subscribe(x => this.note = x);
    
    this.http.getNote(this.noteId).subscribe(data => {
      this.note     = data;

      let read : Array<number>  = [];
      let tags : Array<number>  = [];

      let readAuthor : boolean = false;

      this.note.read.forEach(function(value, index){
        
        read[index] = value.id;

        if(value.id == data.userId)
          readAuthor = true;
      });
      
      // if author is not on the read list than he would appended to the list
      if(!readAuthor)
        read.push(this.note.userId);

      this.readData = read;

      this.note.tags.forEach(function(value, index){

        tags[index] = value.id;
      });

      this.tagData = tags;
    });
  }

  private getTemplates() : void{

    this.http.getParyUsersList(this.partyId).subscribe(x => this.users = x);
    this.http.getNotesTagsList(this.partyId).subscribe(x => this.tags = x);
  }

  private onSubmit(f : NgForm){

    // console.log(f);
    //f.value.members
    //f.value.noteTags    

    let users     : Array<User> = this.users;
    let readArr   : Array<User> = [];

    let tags      : Array<Tag> = this.tags;
    let tagArr    : Array<Tag> = [];

    let indexUrl  : string = "./notes/";

    f.value.members.forEach(function(value, index){

      readArr[index] = users.find(x => x.id == value);
    });

    this.note.read = readArr;

    f.value.noteTags.forEach(function(value, index){

      tagArr[index] = tags.find(x => x.id == value);
    });

    this.note.tags = tagArr;
    
    if(this.note.id == 0){

      this.http.addNote(this.note).subscribe(x => {
        
        this.router.navigate([indexUrl + this.partyId]);
      });
    }
    else{

      this.http.editNote(this.note).subscribe(x => {
        
        this.router.navigate([indexUrl + this.partyId]);
      });
    }
  }
}
