import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { World } from '../../models/world';
import { MockWorlds } from '../../mockupData/mockWorlds';

import { HttpService } from '../services/http.service';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {

  private param : number;
  data  : World = {
    id      : 0,
    name    : '',
    short   : '',
    desc    : '',
    edition : '',
    author  : 1,
  };

  constructor(private route : ActivatedRoute, private router : Router, private http : HttpService) { }

  ngOnInit() {

    this.param = parseInt(this.route.snapshot.paramMap.get('id'));

    //if: lädt Daten
    //else: neues Dataset
    if(this.param !== 0){

      this.getData();
    }
  }

  private getData(){

    this.http.getWorld(this.param).subscribe(data => this.data = data);
  }

  public onSubmit(){

    let worldsArr = MockWorlds;

    if(this.data.id === 0){

      //Variante mit MockData
      // worldsArr.push(this.data);


      let check : boolean = false; //TODO: Dialogausgabe
      this.http.addWorld(this.data).subscribe(data => {
        
        check = data;       
        this.router.navigate(['./worlds']);
      });
    }
    else{

      //Variante mit MockData
      // let key : number = worldsArr.findIndex(x => x.id === this.data.id);

      // worldsArr[key] = this.data;

      //auf Datenbank
      let check : boolean = false; //TODO: Dialogausgabe
      this.http.editWorld(this.data).subscribe(data => { 
        
        check = data;        
        this.router.navigate(['./worlds']);
      });
    }
  }

}
