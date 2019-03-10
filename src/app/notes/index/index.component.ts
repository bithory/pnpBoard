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

  
  //TODO: set to dynamical getting id
  private id      : number = 1;
  public partyId  : number;
  private userId  : number = 1;

  public notes  : Array<Note>;
  public tags   : Array<Tag>;

  constructor(private route : ActivatedRoute, private tools : ToolsService, private http : HttpService) {

    //Um darauf zu reagieren wenn man von Gruppe a Notes zu Gruppe b Notes springt
    //da sonst Index nicht neu angelegt wird
    route.params.subscribe(val => {
      
      this.notes = [];
      this.partyId = parseInt(this.route.snapshot.paramMap.get('partyId'));

      this.getData();
    });
   }

  ngOnInit() {}

  private getData(){
    
    this.http.getIndex(this.partyId, this.userId).subscribe(x => this.notes = x);
  }

  public delete(id : number){

    this.http.deleteNote(id).subscribe(x => {
      this.getData();
    })
  }

}
