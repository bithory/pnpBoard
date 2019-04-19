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
  
  /**
   * baut ein Objekt zu einem URL - Array um (ist egal ob es ein einfaches oder komplexes Objekt ist)
   * 
   * @param obj    
   * @param basicData 
   * @param deep 
   */
  public objectToURLStr(obj : Object, basicData : string, deep : number = 0) : string{
 
    let data      : string = basicData;
    let param     : string = '';

    let arr = Object.keys(obj).map(function(key) {
      return [String(key), obj[key]];
    });

    let selfObj = this;

    arr.forEach(function(value){

      if(typeof value[1] === 'object'){

        let dataParam = data + '[' + value[0] + ']';

        param += selfObj.objectToURLStr(value[1], dataParam, ++deep);
      }
      else{
        
        if(deep > 0)
          param += basicData + '[' + value[0] + ']=' + encodeURIComponent(value[1]) + '&';
        else
          param += data + '[' + value[0] + ']=' + encodeURIComponent(value[1]);
      }

    });

    return param;
  }
}
