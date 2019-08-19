import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthGuard } from '../../../auth.guard';
import { Observable } from 'rxjs';

import { AccountService } from '../account/account.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private acc : AccountService) { }

  // intercept(req, next){

  //   let authService = this.injector.get(AuthGuard);
  //   let tokenizedReq = req.clone({
  //     setHeaders: {
  //       // Authorization: 'Bearer ${authService.getToken()}'
  //       Authorization: 'Bearer xx.yy.zz'
  //     }
  //   })

  //   return next.handle(tokenizedReq);
    
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{

    const cloned = req.clone({});

    // console.log(cloned);
    // let authService = this.injector.get(AuthGuard);

    this.acc.checkTimeOutdate();    

    return next.handle(cloned);
  }
}
