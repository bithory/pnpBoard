import { Component, OnInit } from '@angular/core';
import { World} from '../../models/world';

import { MockWorlds } from '../../mockupData/mockWorlds';

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
  }

  worldList = MockWorlds;

  constructor() { }

  ngOnInit() {
  }

  delete(id : number){

    let worldKey : number = this.worldList.findIndex(x => x.id === id);

    let arrayStart  : Array<World> = this.worldList.slice(0, worldKey);
    let arrayEnd    : Array<World> = this.worldList.slice(worldKey + 1);

    this.worldList = arrayStart.concat(arrayEnd);
  }
}
