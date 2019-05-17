import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';

import { HttpService } from '../services/http.service'
import { AccountService } from '../../account/services/account/account.service'

import { User} from '../../models/user';
import { Login } from '../../models/login';

//mockData
import {MockUsers} from '../../mockupData/mockUsers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public defaultUsr : User = {
    id        : 0,
    username  : '',
    pw        : '',
    email     : '',
    question  : '',
    answer    : '',
  }

  usr : User;

  public login : Login = {
    status  : true,
    token   : '',
  };

  userList  = MockUsers;

  inpBorder         : string = '';
  loginDialogClass  : string = 'hidden';
  loginDialogText   : string = '';

  constructor(private http : HttpService, private acc : AccountService) { }

  ngOnInit() {

  }

  public onSubmit(f: NgForm){

    let usr : User = {
      username  : f.value.usrname,
      pw        : f.value.pw,
      email     : '',
      id        : 0,
      question  : '',
      answer    : '',
    }
    
    this.http.loginUser(usr).subscribe(x =>{

      this.login.token  = x.token;
      this.login.status = x.status;
      
      this.acc.login(x.token);
    } );

      
    if(this.login.status){
      
      this.inpBorder        = '';
      this.loginDialogClass = '';
      this.loginDialogText  = '';
    }
    else{

      this.inpBorder        = 'border border-danger';
      this.loginDialogClass = 'pt-4';
      this.loginDialogText  = 'Wrong username or password!';
    }

  }
}