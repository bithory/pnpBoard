import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private acc : AccountService) { }

  ngOnInit() {

    this.acc.logout();
  }

}
