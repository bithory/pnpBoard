import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

import { AccountService } from '../../account/services/account/account.service';

import { Navigation } from '../../models/navigation';
import { Login } from '../../models/login'
import { access } from 'fs';

@Component({
  selector: 'app-navbar-horizontal',
  templateUrl: './navbar-horizontal.component.html',
  styleUrls: ['./navbar-horizontal.component.css'],
  styles:['.no-hover:hover{background-color : #ffffff;}'],
})
export class NavbarHorizontalComponent implements OnInit {

  private userId : number = 1;
  
  public navItems : Array<Navigation> = [];
  public login    : Login = {
    status  : false,
    token   : '',
  }

  constructor(private http : HttpService, private acc : AccountService) { }

  ngOnInit() {

    this.getData();
  }

  private getData(){

    this.login = this.acc.checkLogin();

    this.http.getNavigation(this.userId).subscribe(data => this.navItems = data);
    
    console.log(this.navItems);
  }

  public logout(){

    this.acc.logout();
  }
}
