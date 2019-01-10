import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { World } from '../../models/world';
import { MockWorlds } from '../../mockupData/mockWorlds';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private param : number;
  data  : World = {
    id      : 0,
    name    : '',
    short   : '',
    desc    : '',
    edition : '',
  };

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {

    this.param = parseInt(this.route.snapshot.paramMap.get('id'));


    if(this.param !== 0){

      this.data = MockWorlds.find(x => x.id == this.param);
    }

    console.log(this.data);
  }

  public onSubmit(){

    let worldsArr = MockWorlds;

    if(this.data.id === 0){

      worldsArr.push(this.data);
    }
    else{

      let key : number = worldsArr.findIndex(x => x.id === this.data.id);

      worldsArr[key] = this.data;
    }

    window.location.href = './worlds/';
  }

}
