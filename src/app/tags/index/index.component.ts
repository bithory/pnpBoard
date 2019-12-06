import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

import { Tag } from '../../models/tag';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public partyId : number;

  public tags : Array<Tag>

  constructor(private http : HttpService, private route : ActivatedRoute) { }

  ngOnInit() {

    this.tags     = [];
    this.partyId  = parseInt(this.route.snapshot.paramMap.get('partyId'));

    this.getData();
  }

  private getData(){

    this.http.getIndex(this.partyId).subscribe(x => this.tags = x);
  }

  public delete(id : number){

    this.http.deleteTag(id).subscribe(x => {

      this.getData();
    })
  }

}
