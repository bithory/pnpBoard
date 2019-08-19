import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

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
    status    : true,
    token     : '',
    timestamp : 0,
  };

  userList  = MockUsers;

  inpBorder         : string = '';
  loginDialogClass  : string = 'hidden';
  loginDialogText   : string = '';

  constructor(
    private http    : HttpService, 
    private acc     : AccountService,
    private router  : Router
  ) { }

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

      if(x.status){
        
        this.login.token      = x.token;
        this.login.status     = x.status;
        this.login.timestamp  = x.timestamp;
        
        this.acc.login(x.token, x.timestamp);

      }
      
      this.showLoginReport(x.status);
    } );

     

  }

  private showLoginReport(status : boolean){

    if(status){
      
      this.inpBorder        = '';
      this.loginDialogClass = '';
      this.loginDialogText  = '';

      this.router.navigate(['./worlds']);
    }
    else{

      this.inpBorder        = 'border border-danger';
      this.loginDialogClass = 'pt-4';
      this.loginDialogText  = 'Wrong username or password!';
    }
  }
}