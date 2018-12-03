import { Component, OnInit, Input } from '@angular/core';
import { User} from '../models/user';
import {NgForm} from '@angular/forms';

//mockData
import {MockUsers} from '../mockupData/mockUsers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  defaultUsr : User = {
    id        : 0,
    username  : '',
    pw        : '',
    email     : '',
  }

  usr : User;

  userList  = MockUsers;

  inpBorder         : string = '';
  loginDialogClass  : string = 'hidden';
  loginDialogText   : string = '';

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(f: NgForm){

    this.findUser(f.value.usrname, f.value.pw);

    if(this.usr.id > 0){
      
      this.inpBorder        = '';
      this.loginDialogClass = '';
      this.loginDialogText  = '';
      //TODO: do something (go to next page) and delete console.log()
      console.log('login successfull');
      console.log(this.usr);
    }
    else{

      this.inpBorder        = 'border border-danger';
      this.loginDialogClass = 'pt-4';
      this.loginDialogText  = 'Wrong username or password!';

      //TODO:  remove console.log
      console.log('login NOT successfull');
    }
  }

  /**
   * This function search after a user which login data are matching with the inputed
   * login data
   * 
   * @param usr : string    | the username
   * @param pw  : string    | the password
   */
  private findUser(usr : string, pw : string) : void{
    
    let usrData : User    = this.defaultUsr;
    let isUsr   : boolean = false;

    //TODO: replace with: get dataset from backend
    this.userList.forEach(function(value, index){

      if(usr === value.username && value.username.localeCompare(usr) == 0){

        if(pw === value.pw && value.pw.localeCompare(pw) == 0){
          
          isUsr   = true;
          usrData = value;
          return;
        }
      }
    });

    if(isUsr){

      this.usr = usrData;
    }
    else{
      
      this.usr = this.defaultUsr;
    }
  }
}
