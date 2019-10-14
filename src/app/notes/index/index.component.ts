import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolsService } from '../../services/tools.service';
import { HttpService } from '../services/http.service';

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

  public partyId  : number;

  public notes  : Array<Note>;
  public tags   : Array<Tag>;
  public title  : string;

  public search : string;

  constructor(private route : ActivatedRoute, private tools : ToolsService, private http : HttpService) {

    this.title = 'Notes';

    //reaction for jumping from party a to party b notes
    //without index whouldn't be loaded
    route.params.subscribe(val => {
      
      this.notes = [];
      this.partyId = parseInt(this.route.snapshot.paramMap.get('partyId'));

      this.getData();
    });
   }

  ngOnInit() {}

  private getData(){
    
    this.http.getIndex(this.partyId).subscribe(x => this.notes = x);
  }

  public delete(id : number){

    this.http.deleteNote(id).subscribe(x => {
      this.getData();
    })
  }

  public filterEnter(key){

    if(key.code == "Enter")
      this.searchElem();
  }

  public searchElem(){

    if(this.search.length == 0)
      this.getData();
    else
      this.http.searchNotes(this.search, this.partyId).subscribe(x => this.notes = x);
  }
}
