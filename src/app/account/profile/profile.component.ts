import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user = new User();

  public errorInp   : Array<string> = [];
  public errorLabel : Array<string> = [];

  public pwConfirm  : string = '';
  public hidden     : string = '';
  public isActField : string = '';

  constructor() { }

  ngOnInit() {
  }

  private getData(){

    
  }

  public onSubmit(f : NgForm){

  }
}
