import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router'

import { AccountService } from '../../account/services/account/account.service';

import { Navigation } from '../../models/navigation';
import { Login } from '../../models/login'
// import { access } from 'fs';

@Component({
  selector: 'app-navbar-horizontal',
  templateUrl: './navbar-horizontal.component.html',
  styleUrls: ['./navbar-horizontal.component.css'],
  styles:['.no-hover:hover{background-color : #ffffff;}'],
})
export class NavbarHorizontalComponent implements OnInit {

  // private userId : number = 1;
  
  public navItems : Array<Navigation> = [];
  public loginData    : Login = {
    status    : false,
    token     : '',
    timestamp : 0,
  }

  constructor(private http : HttpService, private acc : AccountService, private router : Router) { }

  ngOnInit() {

    this.acc.loginObs$.subscribe(x => {

      // this.loginData = x;
      console.log('-----------------');
      console.log(x);
      console.log(this.loginData);
      this.getData();
    });

    this.getData();
  }

  public getData(){

    this.loginData = this.acc.checkLogin();

    // console.log(this.loginData);

    if(this.loginData.status)
      this.http.getNavigation(this.loginData.token).subscribe(data => this.navItems = data);
  }
}
