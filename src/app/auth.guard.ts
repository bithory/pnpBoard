import { Injectable } from '@angular/core';
//import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate, Router} from '@angular/router'
import { Observable } from 'rxjs';
import { AccountService } from './account/services/account/account.service';

import { Login } from './models/login'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /*
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  */
  
  constructor(private acc : AccountService, private router : Router){}

  canActivate(): boolean {

    let login : Login = this.acc.checkLogin();
    
    if(!login.status)
      this.router.navigate(['/account/login']);

    return login.status;
  }

  noProtection() : boolean{

    return true;
  }
  
}
