import { Component, OnInit } from '@angular/core';
import { World} from '../../models/world';

import { MockWorlds } from '../../mockupData/mockWorlds';

import { HttpService } from '../services/http.service';
import { ToolsService } from '../../services/tools.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  world : World = {
    id      : 0,
    name    : '',
    short   : '',
    desc    : '',
    edition : '',
    author  : 0,
  }

  // worldList = MockWorlds;
  worldList : Array<World>;

  constructor(private http : HttpService, private tools : ToolsService) { }

  ngOnInit() {

    this.getData();
  }

  private getData(){

    this.http.getWorldList()
    .subscribe(data => this.worldList = data);
  }

  public delete(id : number){

    let check : boolean = false
    this.http.deleteWorld(id).subscribe(data => {
      check = data;

      this.getData();
    });

    // this.getData();
    //um Volumen zu sparen wird die Liste vor Ort manipuliert und nicht neu geladen
    // let key : number = this.worldList.findIndex( x => x.id === id);
    // this.worldList = this.tools.delSingleArrElem(key, this.worldList);
  }
}
