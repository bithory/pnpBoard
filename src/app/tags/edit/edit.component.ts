import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HttpService } from '../services/http.service';

import { Tag } from '../../models/tag';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],  
  styles:['.no-block{display : inline;}'],
})
export class EditComponent implements OnInit {

  private id      : number;
  public partyId  : number;
  public tag      : Tag;

  public isActField : boolean;
  public hidden     : string;

  constructor(private route : ActivatedRoute, private router : Router, private http : HttpService) { }

  ngOnInit() {

    this.id       = parseInt(this.route.snapshot.paramMap.get('id'));
    this.partyId  = parseInt(this.route.snapshot.paramMap.get('partyId'));

    let mode   : string = this.route.snapshot.paramMap.get('mode');

    this.tag = {
      id      : 0,
      name    : '',
      partyId : this.partyId,
    };
    
    if(mode !== 'new'){

      this.getData();

      if(mode === 'view'){

        this.isActField = true;
        this.hidden     = 'd-none';
      }
      else{

        this.getData();

        this.isActField = false;
        this.hidden     = '';
      }
    }

  }

  private getData() : void {

    this.http.getTag(this.id).subscribe(x => this.tag = x);
  }

  public onSubmit(){

    let indexUrl : string = './tags/';

    if(this.id == 0){

      this.http.addTag(this.tag).subscribe(x => {

        this.router.navigate([indexUrl + this.partyId]);
      });
    }
    else{

      this.http.editTag(this.tag).subscribe(x => {

        this.router.navigate([indexUrl + this.partyId]);
      });
    }
  }
}
