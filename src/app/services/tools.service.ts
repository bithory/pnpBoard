import { Injectable } from '@angular/core';

import { Party } from '../models//party';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  public test() : void{}

  public delSingleArrElem(key : number, arr : Array<any>){

    let arrayStart  = arr.slice(0, key);
    let arrayEnd    = arr.slice(key + 1);

    arr = arrayStart.concat(arrayEnd);

    return arr;
  }
}
