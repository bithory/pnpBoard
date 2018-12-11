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
    id    : 0,
    name  : '',
  }

  worldList = MockWorlds;

  constructor() { }

  ngOnInit() {
  }

}
