import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolsService } from '../../services/tools.service';

import { Tag } from '../../models/tag';
import { Note } from '../../models/note';

import { MockTags } from '../../mockupData/mockTags';
import { MockNotes } from '../../mockupData/mockNotes';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  
  //TODO: set to dynamical getting id
  private id      : number = 1;
  public partyId  : number;

  public notes  : Array<Note>;
  public tags   : Array<Tag>;

  constructor(private route : ActivatedRoute, private tools : ToolsService) { }

  ngOnInit() {
    

    this.notes = [];
    this.partyId = parseInt(this.route.snapshot.paramMap.get('partyId'));

    this.getData();
  }

  private getData(){
    
    let id        : number      = this.id;
    let partyId   : number      = this.partyId;
    let notesData : Array<Note> = [];
    let tmpData   : Array<Note> = MockNotes;

    tmpData.forEach(function(val){

      if(val.userId === id)
        notesData.push(val);
    });

    tmpData = [];

    notesData.forEach(function(val){

      if(val.partyId === partyId)
        tmpData.push(val);
    });

    this.notes = tmpData;
  }

  public delete(id : number){

    let key     = this.notes.findIndex(x => x.id === id);
    this.notes  = this.tools.delSingleArrElem(key, this.notes);
  }

}
