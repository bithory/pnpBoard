import { Component, OnInit } from '@angular/core';
import { World } from '../../models/world';
import { MockWorlds } from '../../mockupData/mockWorlds';

import {ActivatedRoute} from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public world : World = {
    id      : 0,
    name    : '',
    short   : '',
    desc    : '',
    edition : '',
    author  : 0,
  };

  private worldList = MockWorlds;

  constructor(private route : ActivatedRoute, private http : HttpService) { }

  ngOnInit() {

    let key : number = parseInt(this.route.snapshot.paramMap.get('id'));

    if(key !== 0){

      // this.world = this.worldList.find(x => x.id === key);
      this.http.getWorld(key).subscribe(data => this.world = data);
    }
  }

}
