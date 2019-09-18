import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from '../services/http.service';
import { AccountService } from '../services/account/account.service';

import { User } from '../../models/user'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user : User = {
    id        : 0,
    username  : '',
    pw        : '',
    question  : '',
    answer    : '',
    email     : '',
  }

  private errorLabel  : any = {};
  private errorInp    : any = {};

  public valid    : string = 'valid-feedback';
  public invalid  : string = 'invalid-feedback';

  public pwConfirm;

  public toShort  : string = 'Your input is to short.';
  public falsePw  : string = 'Your password and password confirmation aren\'t equal.'
  public errorMail: string = 'This is not a valid email.';

  private errorMsgLabel : string = 'text-danger';
  private errorMsgInp   : string = 'border border-danger';
  private succMsgLabel  : string = '';
  private succMsgInp    : string = '';

  constructor(private acc : AccountService, private http : HttpService, private router : Router) { }

  ngOnInit() {

    this.errorLabel['username']  = '';
    this.errorLabel['email']     = '';
    this.errorLabel['pw']        = '';
    this.errorLabel['pwConfirm'] = '';
    this.errorLabel['question']  = '';
    this.errorLabel['answer']    = '';  

    this.errorInp['username']  = '';
    this.errorInp['email']     = '';
    this.errorInp['pw']        = '';
    this.errorInp['pwConfirm'] = '';
    this.errorInp['question']  = '';
    this.errorInp['answer']    = '';  
  }



  private onSubmit(f : NgForm){

    let error         : boolean = false;
    let check         : boolean = false;

    this.user.username  = '' + f.value.username;
    this.user.question  = '' + f.value.question;
    this.user.answer    = '' + f.value.answer;
    this.user.pw        = '' + f.value.pw;

    error = this.validateForms(f.value.pwConfirm);

    if(!error){

      this.user.username  = f.value.username;
      this.user.email     = f.value.email;
      this.user.pw        = f.value.pw;
      this.user.question  = f.value.question;
      this.user.answer    = f.value.answer;

      this.http.registerUser(this.user).subscribe(x => {
        
        //if error msg
        if(!x.status){

          this.pwConfirm  = '';
          this.user.pw    = '';

          if(x.msg == 'username')
            this.user.username = '';

          console.log('reg error');
          this.validateForms('');
        }
        else{

          console.log('reg succ');
          this.router.navigate(['./account/login']);
        }
      });
    }
  }

  private validateForms(pwConfirm : string) : boolean{

    let error       : boolean = false;
    let emailPattern          = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?');
    
    if(this.user.username.length < 3){

      error = true;
      this.errorLabel['username'] = this.errorMsgLabel;
      this.errorInp['username']   = this.errorMsgInp;
    }
    else{
      
      this.errorLabel['username'] = this.succMsgLabel;
      this.errorInp['username']   = this.succMsgInp;
    }

    if(!emailPattern.test(this.user.email)){

      error = true;
      this.errorLabel['email']  = this.errorMsgLabel;
      this.errorInp['email']    = this.errorMsgInp;
    }
    else{

      this.errorLabel['email']  = this.succMsgLabel;
      this.errorInp['email']    = this.succMsgInp;
    }

    if(this.user.pw.length < 5 || this.user.pw != pwConfirm){

      error = true;
      this.errorLabel['pw']     = this.errorMsgLabel;
      this.errorInp['pw']       = this.errorMsgInp;

      this.errorLabel['pwConfirm']  = this.errorMsgLabel;
      this.errorInp['pwConfirm']    = this.errorMsgInp;
    }
    else{
      
      this.errorLabel['pw']     = this.succMsgLabel;
      this.errorInp['pw']       = this.succMsgInp;

      this.errorLabel['pwConfirm']  = this.succMsgLabel;
      this.errorInp['pwConfirm']    = this.succMsgInp;
    }

    if(this.user.question.length < 5){

      error = true;
      this.errorLabel['question']   = this.errorMsgLabel;
      this.errorInp['question']     = this.errorMsgInp;
    }
    else{

      this.errorLabel['question']   = this.succMsgLabel;
      this.errorInp['question']     = this.succMsgInp;
    }

    if(this.user.answer.length < 3){

      error = true;
      this.errorLabel['answer'] = this.errorMsgLabel;
      this.errorInp['answer']   = this.errorMsgInp;
    }
    else{

      this.errorLabel['answer'] = this.succMsgLabel;
      this.errorInp['answer']   = this.succMsgInp;
    }

    return error;
  }
}
