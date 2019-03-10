import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

import { Navigation } from '../../models/navigation';

@Component({
  selector: 'app-navbar-horizontal',
  templateUrl: './navbar-horizontal.component.html',
  styleUrls: ['./navbar-horizontal.component.css'],
  styles:['.no-hover:hover{background-color : #ffffff;}'],
})
export class NavbarHorizontalComponent implements OnInit {

  private userId : number = 1;
  
  public navItems : Array<Navigation> = [];

  constructor(private http : HttpService) { }

  ngOnInit() {

    this.getData();
  }

  private getData(){

    this.http.getNavigation(this.userId).subscribe(data => this.navItems = data);
    
    console.log(this.navItems);
  }
}
